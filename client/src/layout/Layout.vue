<script setup lang="ts">
import Drawer from '@/components/Drawer.vue'
import Header from '@/components/Header.vue'
import { inject, provide, ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const drawerOpen = inject<Ref<boolean>>('context')
const route = useRoute()
const router = useRouter()
</script>

<template>
  <Drawer v-show="drawerOpen" />

  <div class="mt-10 max-w-[1600px] mx-auto bg-white shadow-indigo-900 shadow-lg">
    <Header />
    <div class="grid grid-cols-[300px_minmax(0,1fr)] overflow-hidden">
      <div class="border-r-2 p-10">
        <h2 class="font-extrabold text-2xl mb-5 border-b-4">Список Доменов:</h2>
        <ul class="grid gap-5 border border-slate-200 p-4 rounded-2xl">
          <RouterLink to="/"
            ><li
              class="text-xl transition card"
              :class="{ 'text-red-500 font-bold  animate-pulse': route.path === '/' }"
            >
              main:
            </li></RouterLink
          >

          <RouterLink to="/favorite"
            ><li
              class="text-xl transition card"
              :class="{
                'text-red-500 font-bold  animate-pulse': route.path === '/favorite',
              }"
            >
              favorite:
            </li></RouterLink
          >

          <RouterLink to="/chat-login"
            ><li
              class="text-xl transition card"
              :class="{
                'text-red-500 font-bold  animate-pulse': route.path === '/chat-login',
              }"
            >
              ChatLogin:
            </li></RouterLink
          >
        </ul>
      </div>

      <main class="p-10 max-w-full">
        <router-view />
      </main>
    </div>
  </div>
</template>
