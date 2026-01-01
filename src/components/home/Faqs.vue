<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const faqs = [
  {
    question: 'How do I get started with the platform?',
    answer: `Getting started is simple. Sign up for a free account, complete the onboarding process, and you'll have access to our AI models within minutes. No credit card required for the trial period.`,
  },
  {
    question: 'Do I need technical knowledge to use this platform?',
    answer: `No technical expertise is required. Our platform is designed with an intuitive interface that anyone can use. However, we also provide advanced features and API access for developers who want more control.`,
  },
  {
    question: `What's included in the free trial?`,
    answer: `The 14-day free trial includes full access to all features in the Professional plan, including 10,000 API calls, advanced AI models, priority support, and analytics dashboard.`,
  },
  {
    question: `Can I change my plan at any time?`,
    answer: `Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.`,
  },
  {
    question: `What payment methods do you accept?`,
    answer: `We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise plans. All payments are processed securely through Stripe.`,
  },
  {
    question: `Is there a refund policy?`,
    answer: `Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund.`,
  },
  {
    question: `What is the API rate limit?`,
    answer: `Rate limits vary by plan. Starter plans have 10,000 calls/month, Professional plans get 100,000 calls/month, and Enterprise plans have custom limits based on your needs.`,
  },
  {
    question: `How do you ensure data security?`,
    answer: `We use bank-grade 256-bit encryption, are SOC 2 Type II certified, and comply with GDPR and CCPA regulations. Your data is stored in secure, geographically distributed data centers.`,
  },
  {
    question: `What is your uptime guarantee?`,
    answer: `We guarantee 99.9% uptime for all paid plans, backed by our SLA. Our infrastructure is deployed across multiple regions with automatic failover to ensure maximum reliability.`,
  },
]

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
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
        <span class="font-medium">{{ faq.question }}</span>

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
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>
