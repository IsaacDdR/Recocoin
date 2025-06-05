<template>
  <header
    class="bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] relative border-b border-gray-700/50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <img
            class="h-10 w-auto"
            src="/src/assets/svg/recocoin-logo.svg"
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
        class="mx-4 mt-2 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] rounded-lg border border-gray-700/50"
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
    };
  },
};
</script>
