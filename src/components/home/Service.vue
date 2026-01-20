<script lang="ts" setup>
import { useService } from '@/composables/useHome'
const { services } = useService()
</script>
<template>
  <section id="layanan" class="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
    <h3
      class="text-center text-gray-200 text-4xl font-extrabold tracking-tighter leading-tight mb-1"
    >
      Apa Saja Yang Akan Anda Dapatkan?
    </h3>
    <p class="text-center text-gray-400 text-md leading-relaxed mb-1">
      Mulai dari desain website hingga optimasi berkala, berikut adalah cakupan layanan yang akan
      didapatkan:
    </p>
    <div class="max-w-7xl mx-auto p-2 sm:p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl"
          data-aos="fade-up"
          v-for="(data, key) in services"
          :key="key"
        >
          <div
            class="mt-4 mb-2 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center w-[50px] sm:w-[15%] py-2"
            v-html="data.icon"
          ></div>
          <h3 class="text-white text-gray-200 text-2xl font-extrabold mb-2">
            {{ data.title }}
          </h3>
          <p class="text-slate-400 text-sm">
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
