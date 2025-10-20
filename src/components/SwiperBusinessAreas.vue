<template>
  <swiper
    :modules="[Pagination]"
    :pagination="{ clickable: true }"
    :space-between="24"
    :slides-per-view="1"
    class="w-full pb-12"
  >
    <swiper-slide>
      <div class="slide-card-wrapper">
        <div
          class="bg-black p-12 pb-24 flex flex-col justify-between h-full min-h-[500px] max-w-xs mx-auto"
        >
          <div>
            <h3 class="text-white text-2xl font-light mb-4">Refrigeración comercial</h3>
            <p class="text-white text-base font-light mb-8">
                Infraestructura para tu negocio.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/350x180?text=Restaurants"
            alt="Restaurants"
            class="w-full object-contain"
          />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-card-wrapper">
        <div
          class="bg-black p-12 pb-24 flex flex-col justify-between h-full min-h-[500px] max-w-xs mx-auto"
        >
          <div>
            <h3 class="text-white text-2xl font-light mb-4">Cocinas industriales</h3>
            <p class="text-white text-base font-light mb-8">
              Lo mejor para la alta producción
            </p>
          </div>
          <img
            src="https://via.placeholder.com/350x180?text=High+Cuisine"
            alt="High Cuisine"
            class="w-full object-contain"
          />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-card-wrapper">
        <div
          class="bg-black p-12 pb-24 flex flex-col justify-between h-full min-h-[500px] max-w-xs mx-auto"
        >
          <div>
            <h3 class="text-white text-2xl font-light mb-4">
              Básculas y Maquinaria

            </h3>
            <p class="text-white text-base font-light mb-8">
              Alta maquinaria de todo tipo
            </p>
          </div>
          <img
            src="https://via.placeholder.com/350x180?text=Fast+Casual+Food"
            alt="Fast Casual Food"
            class="w-full object-contain"
          />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-card-wrapper">
        <div
          class="bg-black p-12 pb-24 flex flex-col justify-between h-full min-h-[500px] max-w-xs mx-auto"
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

<script>
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".parallax-bg");
    if (images.length) {
      window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        images.forEach((image) => {
          const speed = 0.5;
          image.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });
    }
  });
}
</script>

<style scoped>
.swiper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  padding-bottom: 3rem;
}
.swiper-wrapper {
  flex: 1 1 auto;
}
.swiper-pagination {
  position: absolute !important;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  z-index: 10;
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
</style>
