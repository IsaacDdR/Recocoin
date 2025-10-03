<template>
  <div class="contact-section">
    <div class="max-w-7xl mx-auto px-6 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contáctanos</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Comunícate con nosotros en cualquiera de nuestras ubicaciones para recibir asesoramiento y soporte profesional
        </p>
      </div>

      <!-- Contact Cards Container -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0 pb-0">
        
        <!-- Primary Office Card -->
        <div class="contact-card bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-start space-x-4 mb-6">
            <div class="bg-[#f1f5f9] p-3 rounded-full">
              <svg class="w-6 h-6 text-[#1f2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">San Miguel de La Victoria</h3>
              <p class="text-gray-600">Centro de distribución</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="text-gray-700">{{ primaryOffice.address }}</span>
            </div>

            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span class="text-gray-700">{{ primaryOffice.phone }}</span>
            </div>

            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span class="text-gray-700">{{ primaryOffice.email }}</span>
            </div>

            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-gray-700">{{ primaryOffice.hours }}</span>
            </div>
          </div>

          <div class="mt-8">
            <button 
              @click="getDirections('primary')"
              class="w-full bg-[#1f2937] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#374151] transition-colors duration-200"
            >
              Cómo llegar
            </button>
          </div>
        </div>

        <!-- Secondary Office Card -->
        <div class="contact-card bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-start space-x-4 mb-6">
            <div class="bg-[#e2e8f0] p-3 rounded-full">
              <svg class="w-6 h-6 text-[#153040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Querétaro</h3>
              <p class="text-gray-600">Centro de distribución</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="text-gray-700">{{ secondaryOffice.address }}</span>
            </div>

            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span class="text-gray-700">{{ secondaryOffice.phone }}</span>
            </div>

            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span class="text-gray-700">{{ secondaryOffice.email }}</span>
            </div>

            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-gray-700">{{ secondaryOffice.hours }}</span>
            </div>
          </div>

          <div class="mt-8">
            <button 
              @click="getDirections('secondary')"
              class="w-full bg-[#153040] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1f2937] transition-colors duration-200"
            >
              Cómo llegar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'ContactSection',
  data() {
    return {
      primaryOffice: {
        name: 'Headquarters',
        address: '3ra Manzana s/n Carretera México - Querétaro Km 101.6, San Miguel de la Victoria, C.P. 54270, Edo. de México',
        phone: '56 1499 88 88', 
        email: 'tienda.sm@recocoind.com.mx',
        hours: 'Lunes - Viernes : 9:00 AM- 5:00 PM, Sábado : 9:00 AM - 3:00 PM'
      },
      secondaryOffice: {
        name: 'West Coast Office',
        address: 'Av 5 de Febrero #505 local 15 Col. La Capilla, Querétaro, Qro. C.P. 76170',
        phone: '55 5194 22 38',
        email: 'tienda.qro@recocoind.com.mx',
        hours: 'Lunes - Viernes : 9:00 AM- 5:00 PM' 
      }
    }
  },
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      // GSAP Animation on component mount
      if (typeof gsap !== 'undefined') {
        // Animate contact cards on load
        gsap.timeline()
          .from('.contact-card', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
          })
          .from('.contact-section h2', {
            duration: 0.6,
            y: -30,
            opacity: 0,
            ease: 'power3.out'
          }, '-=0.6')
          .from('.contact-section p', {
            duration: 0.6,
            y: -20,
            opacity: 0,
            ease: 'power3.out'
          }, '-=0.4');

        // Hover animations for contact cards
        document.querySelectorAll('.contact-card').forEach(card => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              duration: 0.3,
              y: -5,
              ease: 'power2.out'
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              duration: 0.3,
              y: 0,
              ease: 'power2.out'
            });
          });
        });
      }
    },
    getDirections(location) {
      const addresses = {
        primary: '123 Business District Ave, New York, NY 10001',
        secondary: '456 Tech Boulevard, San Francisco, CA 94105'
      };
      
      // Open directions in default map application
      const address = encodeURIComponent(addresses[location]);
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        // Show feedback (you can add a toast notification here)
        console.log('Copied to clipboard:', text);
      });
    }
  }
}
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

}

.contact-card {
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color, #3b82f6), var(--accent-color-light, #60a5fa));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.contact-card:hover::before {
  transform: scaleX(1);
}

/* Animation classes for GSAP */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
}

.stagger-item {
  opacity: 0;
  transform: translateY(20px);
}
</style>