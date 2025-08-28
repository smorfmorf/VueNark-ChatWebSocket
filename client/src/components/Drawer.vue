<script setup lang="ts">
import { inject, ref, type Ref } from 'vue'
const drawerOpen = inject<Ref<boolean>>('context')
const refDom = ref<HTMLElement | null>(null)

function setOpenDrawer(value = false) {
  if (drawerOpen) drawerOpen.value = value
}
</script>

<template>
  <div
    v-show="drawerOpen"
    ref="refDom"
    class="fixed z-30 top-0 left-0 w-full h-full bg-black/70"
    @click.self="setOpenDrawer(false)"
  ></div>

  <transition name="slide">
    <div v-show="drawerOpen" class="fixed z-30 top-0 right-0 w-96 h-full bg-white p-8 rounded-2xl">
      <!-- Контент Drawer -->
      <div class="group cursor-pointer flex items-center gap-5" @click="setOpenDrawer(false)">
        <svg
          class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition group-hover:-translate-x-1"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H14.7143"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.71436 1L14.7144 7L8.71436 13"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2 class="text-2xl font-bold">Корзина</h2>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
