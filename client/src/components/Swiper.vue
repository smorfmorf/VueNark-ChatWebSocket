<template>
  <swiper
    :modules="[Navigation, Scrollbar, A11y]"
    :spaceBetween="20"
    :slidesPerView="1"
    navigation
    scrollbar
    @slideChange="onSlideChange"
    :breakpoints="{
      1024: { slidesPerView: 1, spaceBetween: 10 },
    }"
  >
    <swiper-slide>
      <img src="/swiper1.webp" class="mb-3 w-full h-full object-cover" />
    </swiper-slide>
    <swiper-slide>
      <img src="/swiper2.webp" class="mb-3 w-full h-full object-cover" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
// импорт модулей Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// импорт компонентов Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'

// импорт стилей
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function onSlideChange(event: any) {
  console.log(event.el)
}
</script>

<style scoped></style>
