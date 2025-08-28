<script setup lang="ts">
import { nextTick, ref, watch, provide } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { io } from 'socket.io-client'
//! адрес по которому подкл к серверу
const socket = io('http://localhost:4444')
provide('socketIO', socket)

const drawerOpen = ref<boolean>(false)
provide('context', drawerOpen)

const isModalOpen = ref(false)
const overlayRef = ref<HTMLElement | null>(null)

//  === Функции модалки ===
function toggleModal() {
  isModalOpen.value = !isModalOpen.value
}

function handleClickOutSide(event: MouseEvent) {
  if (event.target === overlayRef.value) {
    toggleModal()
  }
}

watch(isModalOpen, async (newVal) => {
  if (newVal) {
    await nextTick() // Ждём рендер (пока Vue обновит DOM)
    console.log('Overlay готов:', overlayRef.value)

    window.addEventListener('click', handleClickOutSide)
  } else {
    console.log('Overlay убран')
    window.removeEventListener('click', handleClickOutSide)
  }
})
</script>

<template>
  <button @click="toggleModal">Модалка</button>

  <!-- типо когда Vue видит router-view он идет в router и смотрит по какому URL что рендерить  -->
  <RouterView />

  <!-- Портал -->
  <transition name="fade" v-if="isModalOpen">
    <teleport to="#modal-root">
      <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-30" ref="overlayRef">
        <div class="bg-white p-6 w-1/2 mx-auto mt-20 rounded">
          <h2>Это модальное окно</h2>
          <p>Оно отрендерено вне текущего DOM-узла</p>
        </div>
      </div>
    </teleport>
  </transition>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
