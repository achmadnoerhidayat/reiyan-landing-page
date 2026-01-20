<script lang="ts" setup>
import { usePortfolio } from '@/composables/useHome'
const { port } = usePortfolio()
</script>
<template>
  <section id="portfolio" class="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
    <h3
      class="text-center text-gray-200 text-4xl font-extrabold tracking-tighter leading-tight mb-1"
    >
      Proyek Pilihan
    </h3>
    <div class="max-w-7xl mx-auto p-2 sm:p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="max-w-sm mx-auto bg-slate-900 border border-white/10 rounded-t-[2rem] rounded-b-[15px] overflow-hidden shadow-xl"
          data-aos="fade-up"
          data-aos-delay="100"
          v-for="(data, key) in port"
          :key="key"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              :src="data.image"
              alt="Project Preview"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div class="p-6">
            <h3 class="text-white font-bold text-lg">
              {{ data.title }}
            </h3>
            <p class="text-slate-400 text-sm mt-2">
              {{ data.deskripsi }}
            </p>
            <a
              :href="data.link"
              class="text-blue-500 text-sm font-bold flex items-center gap-2 mt-2"
              >Lihat Studi Kasus <span>-></span></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
