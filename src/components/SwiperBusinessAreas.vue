<template>
  <swiper
    :modules="[Pagination]"
    :pagination="{ clickable: true }"
    :space-between="24"
    :slides-per-view="1"
    class="w-full"
  >
    <swiper-slide>
      <div
        class="bg-black p-12 flex flex-col justify-between h-full min-h-[500px] max-w-xs mx-auto"
      >
        <div>
          <h3 class="text-white text-2xl font-light mb-4">Restaurants</h3>
          <p class="text-white text-base font-light mb-8">
            Discover our tools for a highly profitable kitchen.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/350x180?text=Restaurants"
          alt="Restaurants"
          class="w-full object-contain"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="bg-black p-12 flex flex-col justify-between h-full min-h-[500px] max-w-xs mx-auto"
      >
        <div>
          <h3 class="text-white text-2xl font-light mb-4">High Cuisine</h3>
          <p class="text-white text-base font-light mb-8">
            Discover the most suitable solutions for even the most demanding
            chef.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/350x180?text=High+Cuisine"
          alt="High Cuisine"
          class="w-full object-contain"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="bg-black p-12 flex flex-col justify-between h-full min-h-[500px] max-w-xs mx-auto"
      >
        <div>
          <h3 class="text-white text-2xl font-light mb-4">Fast Casual Food</h3>
          <p class="text-white text-base font-light mb-8">
            From franchise formats to replicable cooking.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/350x180?text=Fast+Casual+Food"
          alt="Fast Casual Food"
          class="w-full object-contain"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="bg-black p-12 flex flex-col justify-between h-full min-h-[500px] max-w-xs mx-auto"
      >
        <div>
          <h3 class="text-white text-2xl font-light mb-4">Design</h3>
          <p class="text-white text-base font-light mb-8">
            Discover the tools to support your professionalism.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/350x180?text=Design"
          alt="Design"
          class="w-full object-contain"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
</script>
