<template>
    <header class="bg-gray-800">
      <div class="flex items-center justify-between px-4 py-3">
        <div>
        <img class="h-12" src="src/assets/svg/recocoin-logo.svg" alt="Workcation">
        </div>
        <div>
          <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">
        <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Inicio</a>
        <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Productos</a>
        <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Galería</a>
        <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Contacto</a>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: true,
      }
    },
  }
  </script>