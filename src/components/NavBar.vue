<template>
  <header class="bg-gray-900 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <img class="h-10 w-auto" src="/Recocoin/assets/svg/recocoin-logo.svg" alt="Recocoin Logo">
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden sm:flex sm:items-center sm:space-x-8">
          <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Inicio</a>
          <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Productos</a>
          <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Galería</a>
          <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Contacto</a>
        </nav>

        <!-- Mobile menu button -->
        <div class="sm:hidden">
          <button 
            @click="isOpen = !isOpen" 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-150 ease-in-out"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Menu icon -->
            <svg 
              class="h-8 w-8" 
              :class="{'hidden': isOpen, 'block': !isOpen}" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close icon -->
            <svg 
              class="h-8 w-8" 
              :class="{'hidden': !isOpen, 'block': isOpen}" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      :class="{'block': isOpen, 'hidden': !isOpen}" 
      class="sm:hidden bg-gray-800"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition duration-150 ease-in-out">Inicio</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition duration-150 ease-in-out">Productos</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition duration-150 ease-in-out">Galería</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition duration-150 ease-in-out">Contacto</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>