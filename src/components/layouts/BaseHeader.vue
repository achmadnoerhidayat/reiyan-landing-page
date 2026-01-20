<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const isScrol = ref(false)
const toggleNav = ref(false)
const chatwa = ref('')
const handleScroll = () => {
  // Jika scroll lebih dari 20px, aktifkan mode floating
  isScrol.value = window.scrollY > 20
}

const handleBurgetNav = () => {
  toggleNav.value = !toggleNav.value
}
const headerItem = [
  {
    link: 'home',
    title: 'Home',
  },
  {
    link: 'layanan',
    title: 'Layanan',
  },
  {
    link: 'portfolio',
    title: 'Portfolio',
  },
  {
    link: 'price',
    title: 'Harga',
  },
]
const formatChatWa = () => {
  const phone = '6281224738582'
  const pesan = 'Halo Admin Reiyandev, saya mau tanya...'

  // Ini otomatis ngurusin spasi dan karakter unik
  chatwa.value = `https://wa.me/${phone}?text=${encodeURIComponent(pesan)}`
}

onMounted(() => {
  formatChatWa()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 flex flex-col items-center transition-all duration-500"
    :class="[isScrol ? 'mt-4' : 'mt-0']"
  >
    <div
      class="flex justify-between items-center transition-all duration-500"
      :class="[
        isScrol
          ? 'w-[92%] sm:w-[90%] max-w-6xl p-3 px-6 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-xl'
          : 'w-full p-5 px-6 md:px-10 rounded-none bg-transparent border-transparent',
      ]"
    >
      <div class="text-xl font-extrabold tracking-tighter text-blue-500 flex-shrink-0 min-w-0">
        Reiyan<span class="text-white">.DEV</span>
      </div>

      <div
        class="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500"
      >
        <a
          :href="`#${data.link}`"
          class="hover:text-white transition"
          v-for="(data, key) in headerItem"
          :key="key"
          >{{ data.title }}</a
        >
      </div>

      <div class="md:hidden text-white" @click="handleBurgetNav">
        <svg
          v-if="!toggleNav"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
          ></path>
        </svg>
      </div>
      <a
        :href="chatwa"
        class="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-xs font-bold transition shadow-lg shadow-blue-500/20"
      >
        Konsultasi Gratis
      </a>
    </div>
    <Transition name="fade-slide">
      <div
        class="absolute top-full left-1/2 -translate-x-1/2 flex flex-col rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 w-[92%] mt-2 z-50 shadow-2xl overflow-hidden"
        v-if="toggleNav"
      >
        <nav class="flex flex-col gap-1 p-2">
          <a
            v-for="(data, key) in headerItem"
            :key="key"
            :href="`#${data.link}`"
            class="text-slate-300 flex w-full items-center rounded-xl p-4 transition-all hover:bg-white/10 hover:text-white active:scale-95"
          >
            {{ data.title }}
          </a>
        </nav>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
/* Animasi Masuk & Keluar */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Posisi Awal saat Muncul & Posisi Akhir saat Hilang */
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px) scale(0.95);
}

/* Posisi Normal */
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translate(-50%, 0) scale(1);
}
</style>
