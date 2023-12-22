<script setup lang="ts">
import { ref, computed } from "vue"

import Play from "@/components/Play.vue"
import Analitics from "@/components/Analitics.vue"
import Settings from "@/components/Settings.vue"

const selectedTab = ref<string>("Play");

// TODO реализовать анимацию смены tab-ов
const changeTab = (tab: string) => { selectedTab.value = tab; }
const isTabSelected = computed(() => (tab: string) => selectedTab.value === tab);
</script>

<template>
  <div class="grid grid-rows-[91fr,9fr] min-h-screen">
    <Analitics class="almond" v-show="isTabSelected('Analitics')" />
    <Play class="almond" v-show="isTabSelected('Play')" />
    <Settings class="almond" v-show="isTabSelected('Settings')" />

    <div class="btm-nav">
      <button :class="isTabSelected('Analitics') ? 'active' : ''" @click="changeTab('Analitics')">
        <i class="fa-solid fa-chart-simple"></i>
      </button>
      <button :class="isTabSelected('Play') ? 'active' : ''" @click="changeTab('Play')">
        <i class="fas fa-play"></i>
      </button>
      <button :class="isTabSelected('Settings') ? 'active' : ''" @click="changeTab('Settings')">
        <i class="fa fa-cog"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.almond-toolbar {
  @apply bg-red-500 dark:bg-slate-600;
}
</style>