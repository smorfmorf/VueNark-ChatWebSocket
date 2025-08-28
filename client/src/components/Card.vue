<script setup lang="ts">
interface Props {
  category: number
  id: number
  title: string
  price: number
  imageUrl: string
}

const { category, id, title, price, imageUrl } = defineProps<Props>()
console.log('id: ', id)

defineEmits(['eventDamp'])
</script>

<template>
  <article
    class="border border-gray-300 p-6 bg-slate-200 shadow-2xl hover:shadow-red-500 transition hover:scale-105 flex flex-col justify-between z-10"
  >
    <!-- <img :src="`narko/${imageUrl}`" /> -->
    <img
      src="https://img1.akspic.ru/previews/1/6/0/6/7/176061/176061-yablochnyj_pejzazh-yabloko-illustracia-prirodnyj_landshaft-purpur-500x.jpg"
      alt=""
    />
    <p className="my-2">title</p>
    <div className="flex items-center justify-between ">
      <div>
        <p className="text-gray-400">Цена:</p>
        <b className="ml-auto">от {{ price }} руб.</b>
      </div>

      <button className="p-2 bg-black text-white cursor-pointer active:scale-105">Купить</button>
    </div>
  </article>
</template>
