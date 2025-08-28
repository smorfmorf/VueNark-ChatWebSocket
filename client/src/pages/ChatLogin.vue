<template>
  <form @submit.prevent="handleSubmit" class="grid border p-8 shadow-md shadow-black">
    <h2 class="text-2xl font-bold mb-4 text-center">Вход в чат</h2>

    <label for="name" class="grid">
      <input id="name" type="text" v-model="userName" class="bg-gray-300 p-4" />
      <p class="text-lg mt-2">Login: {{ userName }}</p>
    </label>

    <span class="text-red-500 shadow-red-300">{{ error }}</span>

    <button class="border p-2 mt-8">Войти</button>
  </form>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { inject, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const store = useUserStore()
const socket = inject<any>('socketIO')

const userName = ref('')
const error = ref('')
const router = useRouter()

function handleSubmit() {
  store.setName(userName.value)
  localStorage.setItem('user', userName.value)
  socket.emit('newUser', { user: userName.value, socketID: socket.id })

  if (!userName.value) {
    error.value = 'Введите логин'
    return
  }

  router.push('/chat')
}

// ✅ следим за вводом
watch(userName, (newVal) => {
  if (newVal) error.value = ''
})
</script>
