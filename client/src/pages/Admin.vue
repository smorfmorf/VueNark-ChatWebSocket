<template>
  <div class="h-screen">
    <div class="grid grid-cols-2 gap-5">
      <div class="grid gap-4">
        <h1 class="text-3xl font-black">Админ панель</h1>
        <img :src="preview" alt="" @click="imgRef.click" />
        <input type="file" ref="imgRef" class="hidden" @change="handleFileChange" />
      </div>
      <div class="p-5 border">
        <p class="text-2xl font-normal">Добавить товар</p>
        <p class="text-2xl font-normal">Добавить категорию</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const imgRef = ref(null)
console.log('imgRef: ', imgRef)

const preview = ref('/Img.png')

let currentObjectUrl = null
function handleFileChange(event) {
  // Очистить предыдущий URL, если он был
  if (currentObjectUrl) {
    console.log('true')
    URL.revokeObjectURL(currentObjectUrl)
  }

  const file = event.target.files[0]

  if (file) {
    currentObjectUrl = URL.createObjectURL(file)
    preview.value = currentObjectUrl
  }
}
</script>
