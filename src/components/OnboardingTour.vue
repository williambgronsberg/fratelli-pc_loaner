<script setup lang="ts">
import { ref, reactive, watch, nextTick, onBeforeUnmount } from "vue";

export interface TourStep {
  selector: string;
  title: string;
  text: string;
  tab?: string;
  placement?: "top" | "bottom" | "center";
}

const props = defineProps<{
  show: boolean;
  steps: TourStep[];
}>();

const emit = defineEmits<{
  close: [];
  finish: [];
  "switch-tab": [tab: string, selector?: string];
}>();

const stepIndex = ref(0);
const rect = reactive({ top: 0, left: 0, width: 0, height: 0, visible: false });
const tooltipStyle = reactive<{ top?: string; left?: string; bottom?: string; transform?: string }>({});

const isLast = () => stepIndex.value === props.steps.length - 1;
const isFirst = () => stepIndex.value === 0;

async function positionForStep() {
  const step = props.steps[stepIndex.value];
  if (!step) return;

  if (step.tab) {
    emit("switch-tab", step.tab, step.selector);
  }
  await nextTick();
  // longer wait on mobile for bottom-sheet animation (0.22s)
  const isMobile = window.innerWidth <= 700;
  await new Promise((r) => setTimeout(r, isMobile ? 320 : 60));

  if (step.placement === "center" || !step.selector) {
    rect.visible = false;
    tooltipStyle.top = "50%";
    tooltipStyle.left = "50%";
    tooltipStyle.transform = "translate(-50%, -50%)";
    tooltipStyle.bottom = undefined;
    return;
  }

  const el = document.querySelector(step.selector) as HTMLElement | null;
  const isHidden = !el || el.getBoundingClientRect().width === 0 || (el.offsetParent === null && getComputedStyle(el).display === "none");
  if (isHidden) {
    rect.visible = false;
    tooltipStyle.top = "50%";
    tooltipStyle.left = "50%";
    tooltipStyle.transform = "translate(-50%, -50%)";
    return;
  }

  el.scrollIntoView({ block: "center", behavior: "instant" as ScrollBehavior });
  // wait for scrollIntoView + sheet settle on mobile
  if (isMobile) await new Promise((r) => setTimeout(r, 80));
  const r = el.getBoundingClientRect();
  const pad = 8;
  rect.top = r.top - pad;
  rect.left = r.left - pad;
  rect.width = r.width + pad * 2;
  rect.height = r.height + pad * 2;
  rect.visible = true;

  const spaceBelow = window.innerHeight - r.bottom;
  const wantsTop = step.placement === "top" || spaceBelow < 180;

  if (isMobile) {
    // mobile: center tooltip horizontally, avoid covering bottom sheet
    tooltipStyle.left = "50%";
    tooltipStyle.transform = "translateX(-50%)";
    if (step.selector.includes("tab-")) {
      // tabs live inside bottom sheet -> place tooltip above sheet near top
      // estimate sheet top: use r.top; place tooltip 16px above tab -> still inside sheet area
      // instead place tooltip in upper half to stay visible
      const isInBottomHalf = r.top > window.innerHeight * 0.45;
      if (isInBottomHalf) {
        tooltipStyle.bottom = undefined;
        // place tooltip ~18% from top so it doesn't get clipped by sheet
        const topPos = Math.max(16, r.top - 180);
        // ensure at least 12px from top and not overlapping sheet
        tooltipStyle.top = `${Math.min(topPos, window.innerHeight * 0.32)}px`;
      } else {
        tooltipStyle.bottom = undefined;
        tooltipStyle.top = `${r.bottom + 16}px`;
      }
    } else {
      // add-fab or other in main content -> place below element, centered
      tooltipStyle.bottom = undefined;
      if (wantsTop) {
        tooltipStyle.top = undefined;
        tooltipStyle.bottom = `${window.innerHeight - r.top + 16}px`;
      } else {
        tooltipStyle.top = `${r.bottom + 16}px`;
      }
    }
  } else {
    tooltipStyle.transform = "none";
    if (wantsTop) {
      tooltipStyle.top = undefined;
      tooltipStyle.bottom = `${window.innerHeight - r.top + 16}px`;
    } else {
      tooltipStyle.bottom = undefined;
      tooltipStyle.top = `${r.bottom + 16}px`;
    }
    const left = Math.min(Math.max(r.left, 16), window.innerWidth - 296);
    tooltipStyle.left = `${Math.max(left, 16)}px`;
  }
}

function next() {
  if (isLast()) {
    finish();
    return;
  }
  stepIndex.value++;
  positionForStep();
}

function prev() {
  if (isFirst()) return;
  stepIndex.value--;
  positionForStep();
}

function skip() {
  emit("close");
}

function finish() {
  emit("finish");
}

function onResize() {
  positionForStep();
}

watch(
  () => props.show,
  (val) => {
    if (val) {
      stepIndex.value = 0;
      positionForStep();
      window.addEventListener("resize", onResize);
    } else {
      window.removeEventListener("resize", onResize);
    }
  },
  { immediate: true }
);

onBeforeUnmount(() => window.removeEventListener("resize", onResize));
</script>

<template>
  <Teleport to="body">
    <Transition name="tour-fade">
      <div v-if="show" class="tour-root">
        <div class="tour-scrim" @click="skip" />
        <div
          v-if="rect.visible"
          class="tour-hole tour-hole-interactive"
          :style="{
            top: rect.top + 'px',
            left: rect.left + 'px',
            width: rect.width + 'px',
            height: rect.height + 'px',
          }"
          @click="next"
          role="button"
          aria-label="Trykk for å gå videre"
          title="Trykk for å gå videre"
        />

        <div class="tour-card" :style="tooltipStyle" @click.self="next">
          <div class="tour-progress">
            <span
              v-for="(_, i) in steps"
              :key="i"
              class="tour-dot"
              :class="{ active: i === stepIndex }"
            />
          </div>
          <div class="tour-title">{{ steps[stepIndex]?.title }}</div>
          <div class="tour-text">{{ steps[stepIndex]?.text }}</div>
          <div class="tour-hint">{{ rect.visible ? "Trykk på den gule markeringen for å fortsette →" : "Trykk på kortet for å fortsette →" }}</div>
          <div class="tour-actions">
            <button class="tour-skip" @click="skip">Hopp over</button>
            <div class="tour-nav">
              <button v-if="!isFirst()" class="tour-btn tour-btn-secondary" @click="prev">Tilbake</button>
              <button v-if="isFirst()" class="tour-btn tour-btn-primary" @click="next">Neste</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.tour-root { position: fixed; inset: 0; z-index: 900; }
.tour-scrim { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.62); }
.tour-hole {
  position: fixed;
  border-radius: 16px;
  box-shadow: 0 0 0 4000px rgba(0, 0, 0, 0.62);
  border: 2px solid #f5c518;
  transition: top 0.25s ease, left 0.25s ease, width 0.25s ease, height 0.25s ease;
  pointer-events: none;
}
.tour-hole-interactive {
  pointer-events: auto;
  cursor: pointer;
  animation: holePulse 1.6s ease-in-out infinite;
}
.tour-hole-interactive:active { transform: scale(0.99); }
@keyframes holePulse { 0%,100% { border-color: #f5c518; box-shadow: 0 0 0 4000px rgba(0,0,0,0.62), 0 0 0 0 rgba(245,197,24,0.3); } 50% { border-color: #ffdf5a; box-shadow: 0 0 0 4000px rgba(0,0,0,0.62), 0 0 0 8px rgba(245,197,24,0.2); } }
.tour-card {
  position: fixed;
  width: 280px;
  max-width: calc(100vw - 32px);
  background: #272729;
  border: 1px solid #3a3a3c;
  border-radius: 18px;
  padding: 18px 18px 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  color: #ffffff;
  font-family: "SF Pro Text", system-ui, -apple-system, sans-serif;
}
.tour-progress { display: flex; gap: 5px; margin-bottom: 12px; }
.tour-dot { width: 6px; height: 6px; border-radius: 50%; background: #48484a; transition: background 0.2s, width 0.2s; }
.tour-dot.active { background: #f5c518; width: 16px; border-radius: 3px; }
.tour-title { font-size: 1rem; font-weight: 600; margin-bottom: 6px; }
.tour-text { font-size: 0.875rem; color: #c7c7cc; line-height: 1.4; margin-bottom: 12px; }
.tour-hint { font-size: 0.75rem; color: #f5c518; margin-bottom: 12px; font-style: italic; animation: tourPulse 1.6s ease-in-out infinite; }
@keyframes tourPulse { 0%,100% { opacity: 0.7; } 50% { opacity: 1; } }
.tour-actions { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.tour-skip { background: none; border: none; color: #8e8e93; font-size: 0.8125rem; cursor: pointer; padding: 6px 2px; }
.tour-skip:active { color: #ff6961; }
.tour-nav { display: flex; gap: 8px; }
.tour-btn { border-radius: 100px; padding: 8px 16px; font-size: 0.8125rem; font-weight: 500; cursor: pointer; border: none; transition: transform 0.15s; }
.tour-btn:active { transform: scale(0.95); }
.tour-btn-primary { background: #f5c518; color: #1d1d1f; }
.tour-btn-secondary { background: none; border: 1px solid #48484a; color: #ffffff; }
.tour-fade-enter-active, .tour-fade-leave-active { transition: opacity 0.2s ease; }
.tour-fade-enter-from, .tour-fade-leave-to { opacity: 0; }

@media (max-width: 700px) {
  .tour-card {
    width: min(320px, calc(100vw - 24px));
    max-width: calc(100vw - 24px);
    padding: 16px 16px calc(14px + env(safe-area-inset-bottom));
    border-radius: 16px;
  }
  .tour-hole { border-radius: 12px; border-width: 1.5px; }
  .tour-title { font-size: 0.9375rem; }
  .tour-text { font-size: 0.8125rem; }
  .tour-btn { padding: 10px 18px; min-height: 40px; }
  .tour-skip { min-height: 40px; display: inline-flex; align-items: center; }
}
</style>
