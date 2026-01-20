<script setup>
import { ref } from 'vue'
import { useFaq } from '@/composables/useHome'
const { faq: faqs } = useFaq()

const activeIndex = ref(null)

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
    <h3
      class="text-center text-gray-200 text-4xl font-extrabold tracking-tighter leading-tight mb-1"
    >
      Pertanyaan yang sering diajukan
    </h3>
    <p class="text-center text-gray-400 text-md leading-relaxed mb-9">
      Semua yang perlu Anda ketahui tentang platform dan layanan kami.
    </p>
    <div class="space-y-4">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
        :class="{ 'ring-1 ring-blue-500/50': activeIndex === index }"
      >
        <button
          @click="toggleFaq(index)"
          class="w-full flex justify-between items-center p-5 text-left text-white cursor-pointer"
        >
          <span class="font-medium">{{ faq.title }}</span>

          <div class="relative flex-shrink-0 flex items-center justify-center w-3 h-3 ml-4">
            <div class="absolute w-3 h-[1.5px] bg-blue-500 rounded-full"></div>

            <div
              class="absolute w-[1.5px] h-3 bg-blue-500 rounded-full transition-transform duration-300"
              :class="{ 'rotate-90 opacity-0': activeIndex === index }"
            ></div>
          </div>
        </button>

        <div
          class="transition-all duration-300 ease-in-out overflow-hidden"
          :style="{ maxHeight: activeIndex === index ? '200px' : '0px' }"
        >
          <div class="p-5 pt-0 text-slate-400 text-sm leading-relaxed">
            {{ faq.deskripsi }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
