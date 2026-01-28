<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Faqs from '@/components/home/Faqs.vue'
import Footers from '@/components/home/Footers.vue'
import Hero from '@/components/home/Hero.vue'
import Service from '@/components/home/Service.vue'
import Price from '@/components/home/Price.vue'
import Portfolio from '@/components/home/Portfolio.vue'
import { useAppSeo } from '@/composables/useHome'
onMounted(() => {
  // @ts-ignore
  if (typeof AOS !== 'undefined') {
    AOS.init()
  }
})
useAppSeo(
  ref({
    title: 'Jasa Web Laravel & Vue TS Cijulang - Expert Clean Architecture',
    description:
      'Jasa Web Laravel & Vue TS Cijulang. Ahli bug fix, integrasi payment gateway & API logistik. Build sistem custom scalable dengan Clean Architecture. Hubungi Reiyan Dev!',
  })
)
</script>

<template>
  <Hero />
  <section id="feature" class="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
    <h3 class="text-center text-gray-200 text-1xl uppercase tracking-[5px] mb-16">
      Trusted by 100+ companies worldwide
    </h3>
    <div
      class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li v-for="(data, key) in 5" :key="key">
          <img
            :src="`https://blink.daisyui.com/images/logo/logo${key + 1}.svg`"
            alt="Logo"
            class="opacity-30 h-8 hover:grayscale-0 hover:opacity-100"
          />
        </li>
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li v-for="(data, key) in 5" :key="key">
          <img
            :src="`https://blink.daisyui.com/images/logo/logo${key + 1}.svg`"
            alt="Logo"
            class="opacity-30 h-8 hover:grayscale-0 hover:opacity-100 cursor-pointer"
          />
        </li>
      </ul>
    </div>
  </section>
  <Service />

  <Portfolio />

  <Price />

  <Faqs />

  <Footers />
</template>
