<script setup lang="ts">
import Card from '@/components/Card.vue'
import Drawer from '@/components/Drawer.vue'
import Swiper from '@/components/Swiper.vue'
import axios from 'axios'
import { computed, inject, onMounted, provide, reactive, ref, watchEffect } from 'vue'

const categories = ref(['Все', 'Alpha', 'Meff', 'Гашиш'])
const activeCategory = ref(0)
const search = ref('')

const list = [
  { name: 'По названию', sortProperty: 'title' },
  { name: 'По цене (дешевые)', sortProperty: 'price' },
  { name: 'По цене (дорогие)', sortProperty: '-price' },
]

const filterSort = ref({
  name: '',
  sortProperty: '',
})

const arrList = ref<Item[]>([])

export interface Item {
  category: number
  id: number
  title: string
  price: number
  imageUrl: string
}

onMounted(async () => {
  const { data } = await axios.get<Item[]>('https://09e68224277db270.mokky.dev/items_Narko')
  arrList.value.push(...data)
})

// const sortedItems = computed(() => {})

const sortedItems = computed(() => {
  // сортируем копию, чтобы не мутировать исходный массив
  const newArr = [...arrList.value]
    .filter((item) => item.title.toLowerCase().includes(search.value.toLowerCase()))
    .filter((item) => (activeCategory.value === 0 ? true : item.category === activeCategory.value))
    .sort((a, b) => {
      switch (filterSort.value.sortProperty) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'price':
          return a.price - b.price
        case '-price':
          return b.price - a.price
        default:
          return 0
      }
    })

  return newArr
})

// const sortedItems = computed(() => {
//   if (filterSort.value.sortProperty) {
//     const sortedArr = arrList.value.sort((a, b) =>
//       a[filterSort.value.sortProperty].localeCompare(b[filterSort.value.sortProperty]),
//     )
//   }

//   return sortedArr.filter((item) => item.title.toLowerCase().includes(search.value.toLowerCase()))
// })

function DampFunc(event: number) {
  console.log(`Вызов с родителя ${event}`)
}
</script>

<template>
  <Swiper />

  <div class="mt-5 flex items-center justify-between">
    <h2 class="text-2xl font-bold mb-2">Все товары</h2>

    <input v-model="search" type="text" placeholder="Поиск..." class="p-2 border" />

    <ul class="inline-flex bg-gray-300 p-1 rounded-2xl">
      <li
        @click="activeCategory = index"
        :class="`cursor-pointer
        flex
        items-center
        h-10
        font-bold
        px-8
        rounded-2xl
        ${index === activeCategory ? 'bg-white' : ''}
        `"
        v-for="(category, index) in categories"
        :key="category"
      >
        {{ category }}
      </li>
    </ul>

    <select v-model="filterSort.sortProperty" class="p-2 border">
      <option value="" disabled>Выберите тип сортировки</option>
      <option v-for="item in list" :value="item.sortProperty">
        {{ item.name }}
      </option>
    </select>
  </div>

  <div class="grid grid-cols-4 gap-5 mt-10" v-auto-animate>
    <Card
      v-for="item in sortedItems"
      :key="item.id"
      :id="item.id"
      :category="item.category"
      :title="item.title"
      :price="item.price"
      :imageUrl="item.imageUrl"
      @eventDamp="DampFunc"
    />
  </div>
</template>
