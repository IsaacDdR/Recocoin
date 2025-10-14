<template>
  <header
    class="bg-gradient-to-r from-gray-900/80 to-gray-800/75 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-transform duration-500 animate-nav-gradient"
    :class="{ 'translate-y-0': isVisible, '-translate-y-full': !isVisible }"
  >
    <div class="max-w-7xl px-2 sm:px-4 lg:px-6 ml-8 sm:ml-12 lg:ml-16">
      <div
        class="flex items-center justify-between h-16 sm:h-24 md:h-28 lg:h-32"
      >
        <div class="flex items-center">
          <img
            class="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
            src="/assets/svg/recocoin-logo.svg"
            alt="Recocoin Logo"
          />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden sm:flex flex-1 justify-evenly max-w-4xl mx-auto">
          <!--
          <a
            href="#"
            class="text-gray-100 hover:text-white px-6 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out hover:bg-gray-700/50"
            >Productos</a
          >
          <a
            href="#"
            class="text-gray-100 hover:text-white px-6 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out hover:bg-gray-700/50"
            >Sectores</a
          >
          <a
            href="#"
            class="text-gray-100 hover:text-white px-6 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out hover:bg-gray-700/50"
            >Experiencia</a
          >
          <a
            href="#"
            class="text-gray-100 hover:text-white px-6 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out hover:bg-gray-700/50"
            >Servicios</a
          >
          <a
            href="#"
            class="text-gray-100 hover:text-white px-6 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out hover:bg-gray-700/50"
            >Referencias</a
          >
          <a
            href="#"
            class="text-gray-100 hover:text-white px-6 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out hover:bg-gray-700/50"
            >Empresa</a
          >
        --></nav>

        <!-- Mobile menu button -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-150 ease-in-out"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Menu icon -->
            <svg
              class="h-8 w-8"
              :class="{ hidden: isOpen, block: !isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Close icon -->
            <svg
              class="h-8 w-8"
              :class="{ hidden: !isOpen, block: isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      :class="[
        'sm:hidden absolute w-full z-50 transform transition-all duration-300 ease-in-out',
        isOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-2 pointer-events-none',
      ]"
    >
      <div
        class="mx-4 mt-2 bg-gradient-to-r from-gray-900/80 to-gray-800/75 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] rounded-lg border border-white/10"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700/50 transition duration-150 ease-in-out"
            >Inicio</a
          >
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700/50 transition duration-150 ease-in-out"
            >Productos</a
          >
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700/50 transition duration-150 ease-in-out"
            >Galería</a
          >
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700/50 transition duration-150 ease-in-out"
            >Contacto</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import recocoinLogo from "../assets/svg/recocoin-logo.svg";

export default {
  data() {
    return {
      isOpen: false,
      recocoinLogo,
      isVisible: false,
      lastScrollY: 0,
      scrollEventsEnabled: false,
    };
  },
  mounted() {
    this.lastScrollY = window.scrollY;
    // Initial slide down animation
    setTimeout(() => {
      this.isVisible = true;
      // Enable scroll events after animation
      setTimeout(() => {
        this.scrollEventsEnabled = true;
        window.addEventListener("scroll", this.handleScroll);
      }, 600); // Match your transition duration
    }, 100);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.scrollEventsEnabled) return;
      if (window.scrollY < this.lastScrollY) {
        // Scrolling up
        this.isVisible = true;
      } else if (window.scrollY > this.lastScrollY) {
        // Scrolling down
        this.isVisible = false;
      }
      this.lastScrollY = window.scrollY;
    },
  },
};
</script>

<style scoped>
header {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes nav-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-nav-gradient {
  background: linear-gradient(
    90deg,
    rgba(17, 24, 39, 0.8),
    rgba(31, 41, 55, 0.75),
    rgba(55, 65, 81, 0.8),
    rgba(31, 41, 55, 0.75),
    rgba(17, 24, 39, 0.8)
  );
  background-size: 200% 100%;
  animation: nav-gradient 30s ease infinite;
}
</style>
