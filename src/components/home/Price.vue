<script lang="ts" setup>
import { usePricePlan } from '@/composables/useHome'
const { plans, formatCurrency, formatChat } = usePricePlan()
</script>
<template>
  <section id="price" class="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
    <h3
      class="text-center text-gray-200 text-4xl font-extrabold tracking-tighter leading-tight mb-1"
    >
      Simple, transparent pricing
    </h3>
    <p class="text-center text-gray-400 text-md leading-relaxed mb-1">
      Pilih paket yang paling sesuai dengan kebutuhan Anda. Selalu ketahui berapa yang akan Anda
      bayar.
    </p>
    <div class="max-w-7xl mx-auto p-2 sm:p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="bg-slate-900 border p-6 rounded-3xl shadow-xl shadow-blue-500/5"
          :class="[data.isPopular ? 'border-blue-600' : 'border-white/10']"
          data-aos="fade-up"
          data-aos-delay="100"
          v-for="(data, key) in plans"
          :key="key"
        >
          <h3 class="text-white text-3xl font-bold mb-2">
            {{ data.name }}
          </h3>
          <p class="text-slate-400 text-sm">
            {{ data.description }}
          </p>
          <div class="font-extrabold tracking-tighter text-blue-500 flex-shrink-0 min-w-0 mt-2">
            <span class="text-4xl">{{ formatCurrency(data.price) }} </span>
          </div>
          <a
            :href="formatChat(data.name)"
            class="border border-white/10 shadow-xl px-5 py-2.5 rounded-3xl text-xs font-bold text-white sm:rounded-full sm:px-3 sm:py-2 sm:text-base hover:scale-105 transition-all duration-300 block text-center flex items-center justify-center w-full mt-2"
            :class="[data.isPopular ? 'bg-blue-600' : '']"
          >
            {{ data.ctaText }}
          </a>
          <ul role="list" class="space-y-4 my-6">
            <li class="flex items-center" v-for="(fitur, key) in data.features" :key="key">
              <svg
                class="w-5 h-5 shrink-0 text-fg-brand me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span class="text-body">
                {{ fitur.text }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
