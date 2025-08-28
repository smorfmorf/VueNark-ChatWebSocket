<template>
  <header
    class="p-10 border-b flex items-center justify-between sticky top-0 backdrop-blur-sm bg-white/40 z-20"
  >
    <RouterLink to="/">
      <div class="flex items-center gap-4">
        <img src="/header.jpeg" class="w-14 rounded-xl transition hover:opacity-80" />

        <div class="grid gap-1">
          <h1 class="text-3xl uppercase font-black">Tattoo Mall</h1>
          <p class="text-sm text-gray-400">Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </RouterLink>

    <nav>
      <ul class="flex items-center gap-4">
        <li
          @click="openDrawer"
          class="flex items-center gap-2 group text-gray-500 cursor-pointer hover:text-black transition"
        >
          <img src="/cart.svg" alt="" :class="{ 'animate-bounce': true }" />

          <b>1600 руб</b>
        </li>

        <RouterLink
          to="/favorite"
          class="flex items-center gap-2 group text-gray-500 cursor-pointer hover:text-black transition"
        >
          <img src="/heart.svg" alt="" />
          <b>Закладки</b>
        </RouterLink>

        <RouterLink
          to="/"
          class="flex items-center gap-2 group text-gray-500 cursor-pointer hover:text-black transition"
        >
          <img src="/profile.svg" alt="" />
          <b>Профиль</b>
        </RouterLink>

        <RouterLink
          v-if="true"
          to="/admin"
          class="flex items-center gap-2 group text-gray-500 cursor-pointer hover:text-black transition"
        >
          <b :class="{ 'animate-pulse': true }">Админка</b>
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { inject } from 'vue'

const drawerOpen = inject('context')

function openDrawer() {
  console.log('drawerOpen: 123123', drawerOpen)
  drawerOpen.value = true
}
</script>
