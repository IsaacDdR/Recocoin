<template>
  <a
    :href="whatsAppLink"
    class="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <svg
      class="whatsapp-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      :style="{ fill: iconColor }"
    >
      <path d="M16 .4C7.2.4.1 7.5.1 16.3c0 2.9.8 5.7 2.3 8.1L.1 32l7.8-2.2c2.3 1.3 5 2 7.7 2 8.8 0 15.9-7.1 15.9-15.9S24.8.4 16 .4zm0 29.1c-2.4 0-4.7-.7-6.7-2l-.5-.3-4.6 1.3 1.3-4.4-.3-.5c-1.3-2-2-4.3-2-6.7C3.2 8.4 8.8 2.9 16 2.9s12.8 5.5 12.8 12.8-5.6 12.8-12.8 12.8zm7.1-9.6c-.4-.2-2.5-1.2-2.9-1.3s-.7-.2-1 .2-1.2 1.3-1.5 1.5-.5.2-.9 0-1.8-.7-3.4-2.1c-1.3-1.2-2.1-2.5-2.3-2.9s0-.6.2-.8.4-.5.6-.8c.2-.2.3-.4.5-.7.2-.4.1-.7 0-1S11.7 9 11.2 8.4c-.5-.6-1.1-.6-1.5-.6H9.1c-.4 0-.8.1-1.2.6s-1.5 1.5-1.5 3.6 1.5 4.1 1.7 4.4 3.1 4.9 7.5 6.5c1 .4 1.8.6 2.5.8.9.3 1.6.2 2.2.1.7-.1 2.5-1 2.9-2s.4-1.9.3-2.1c-.2-.1-.5-.2-1-.4z"/>
    </svg>
  </a>
</template>

<script setup>
import { computed } from 'vue'

// ✅ Get all props as an object
const props = defineProps({
  phone: {
    type: String,
    required: true,
    default: '4271302645'
  },
  message: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: '#ffffff',
  },
  backgroundColor: {
    type: String,
    default: '#3e416aff',
  },
})

// ✅ Use props inside computed
const whatsAppLink = computed(() => {
  const base = `https://wa.me/${props.phone}`
  const encodedMessage = props.message ? `?text=${encodeURIComponent(props.message)}` : ''
  return `${base}${encodedMessage}`
})
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: var(--bg-color, #171a30ff);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 999;
  transition: background-color 0.3s ease;
}

.whatsapp-float:hover {
  filter: brightness(1.1);
}

.whatsapp-icon {
  width: 30px;
  height: 30px;
}
</style>

<script>
// Inject CSS variable for background color dynamically
export default {
  mounted() {
    const el = this.$el
    el.style.setProperty('--bg-color', this.backgroundColor)
  },
  watch: {
    backgroundColor(newColor) {
      this.$el.style.setProperty('--bg-color', newColor)
    },
  },
}
</script>
