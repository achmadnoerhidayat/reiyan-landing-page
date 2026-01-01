<script setup lang="ts">
import { onMounted } from 'vue'
import Faqs from '@/components/home/Faqs.vue'
import Footers from '@/components/home/Footers.vue'

onMounted(() => {
  // @ts-ignore
  if (typeof AOS !== 'undefined') {
    AOS.init()
  }
})
</script>

<template>
  <section id="home" class="mt-[85px] pb-10 px-8 max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div data-aos="fade-right">
        <div class="flex items-center gap-3 mb-6">
          <span
            class="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"
          ></span>
          <span class="text-[10px] font-bold uppercase tracking-widest text-blue-500"
            >Next Gen Platform</span
          >
        </div>
        <h1
          class="text-4xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6 md:mb-8"
        >
          Intelligence That <span class="text-gray-600">Scales</span> With You
        </h1>
        <p class="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
          Transform your workflow with AI that understands your business. Automate complex tasks,
          unlock deep insights, and move 10x faster.
        </p>
        <div class="flex gap-4">
          <a
            href="#projects"
            class="bg-blue-600 px-5 py-2.5 rounded-3xl text-xs font-bold text-white sm:rounded-full sm:px-8 sm:py-4 sm:text-base hover:scale-105 transition-all duration-300 block text-center flex items-center justify-center"
            >Start free trial</a
          >
          <a
            href="#projects"
            class="border border-white/10 shadow-xl px-5 py-2.5 rounded-3xl text-xs font-bold text-white sm:rounded-full sm:px-8 sm:py-4 sm:text-base hover:scale-105 transition-all duration-300 block text-center flex items-center justify-center"
            >Watch Demo</a
          >
        </div>
        <div class="flex flex-wrap items-center gap-6 mt-4">
          <div class="flex items-center gap-2">
            <div
              class="h-1.5 w-1.5 rounded-full bg-slate-500 shadow-[0_0_8px_rgba(148,163,184,0.5)]"
            ></div>
            <span class="text-sm font-medium text-slate-400">no credit card required</span>
          </div>

          <div class="flex items-center gap-2">
            <div class="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
            <span class="text-sm font-medium text-slate-400">14-day free trial</span>
          </div>
        </div>
      </div>
      <div class="relative hidden md:flex justify-end" data-aos="zoom-in">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
          class="rounded-[40px] border border-white/10 opacity-80 shadow-2xl"
        />
      </div>
    </div>
  </section>
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
  <section id="usecase" class="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
    <h3
      class="text-center text-gray-200 text-4xl font-extrabold tracking-tighter leading-tight mb-1"
    >
      Everything you need to succeed
    </h3>
    <p class="text-center text-gray-400 text-md leading-relaxed mb-1">
      Powerful AI capabilities designed for modern teams.
    </p>
    <div class="max-w-7xl mx-auto p-2 sm:p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="md:col-span-2 bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl"
          data-aos="fade-right"
        >
          <div
            class="mt-4 mb-2 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center w-[50px] sm:w-[8%] py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              tw-kj="2"
              tw-ng="round"
              tw-re="round"
              class="lucide-icon lucide lucide-brain tw-lj tw-xx tw-ny"
            >
              <path d="M12 18V5"></path>

              <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>

              <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>

              <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
              <path d="M18 18a4 4 0 0 0 2-7.464"></path>
              <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>

              <path d="M6 18a4 4 0 0 1-2-7.464"></path>
              <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
            </svg>
          </div>
          <h3 class="text-white text-gray-200 text-2xl font-extrabold mb-2">Advanced AI Models</h3>
          <p class="text-slate-400 text-sm">
            State-of-the-art machine learning models that continuously learn and improve from your
            data. Get accuracy rates of 99.9% or higher.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <div class="bg-slate-900 border border-white/10 p-8 rounded-3xl">
              <h3 class="text-xl font-bold text-blue-500">99.9%</h3>
              <p class="text-slate-400 mt-2 text-sm">Accuracy.</p>
            </div>

            <div class="bg-slate-900 border border-white/10 p-8 rounded-3xl">
              <h3 class="text-xl font-bold text-blue-500">50+</h3>
              <p class="text-slate-400 mt-2 text-sm">AI Models.</p>
            </div>
          </div>
        </div>

        <div
          class="bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl shadow-blue-500/5"
          data-aos="fade-left"
        >
          <div
            class="mt-4 mb-2 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center w-[50px] sm:w-[15%] py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              tw-kj="2"
              tw-ng="round"
              tw-re="round"
              class="lucide-icon lucide lucide-zap tw-lj tw-xx tw-ny"
            >
              <path
                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
              ></path>
            </svg>
          </div>
          <h3 class="text-white font-bold mb-2">Ultra-Fast Processing</h3>
          <p class="text-slate-400 text-sm">
            Sub-50ms response times with global edge computing infrastructure.
          </p>
        </div>

        <div
          class="bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl shadow-blue-500/5"
          data-aos="fade-right"
        >
          <div
            class="mt-4 mb-2 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center w-[50px] sm:w-[15%] py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              tw-kj="2"
              tw-ng="round"
              tw-re="round"
              class="lucide-icon lucide lucide-shield tw-lj tw-xx tw-ny"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              ></path>
            </svg>
          </div>
          <h3 class="text-white font-bold mb-2">Enterprise Security</h3>
          <p class="text-slate-400 text-sm">
            Bank-grade encryption, SOC 2 certified, and GDPR compliant protection.
          </p>
        </div>

        <div
          class="md:col-span-2 bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl"
          data-aos="fade-left"
        >
          <div
            class="mt-4 mb-2 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center w-[50px] sm:w-[8%] py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              tw-kj="2"
              tw-ng="round"
              tw-re="round"
              class="lucide-icon lucide lucide-gauge tw-lj tw-xx tw-ny"
            >
              <path d="m12 14 4-4"></path>
              <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
            </svg>
          </div>
          <h3 class="text-white text-gray-200 text-2xl font-extrabold mb-2">Real-Time Analytics</h3>
          <p class="text-slate-400 text-sm">
            Monitor performance, track usage, and gain insights with comprehensive analytics
            dashboard.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <div
              class="bg-slate-900 border border-white/10 p-2 rounded-3xl col-span-2 md:col-span-1"
            >
              <p class="text-slate-400 pl-3 text-sm">Custom Reports.</p>
            </div>

            <div
              class="bg-slate-900 border border-white/10 p-2 rounded-3xl col-span-2 md:col-span-1"
            >
              <p class="text-slate-400 pl-3 text-sm">Live Monitoring.</p>
            </div>

            <div class="bg-slate-900 border border-white/10 p-2 rounded-3xl">
              <p class="text-slate-400 pl-3 text-sm">Data Export.</p>
            </div>

            <div class="bg-slate-900 border border-white/10 p-2 rounded-3xl">
              <p class="text-slate-400 pl-3 text-sm">API Access.</p>
            </div>
          </div>
        </div>

        <div
          class="bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl shadow-blue-500/5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="mt-4 mb-2 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center w-[50px] sm:w-[15%] py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              tw-kj="2"
              tw-ng="round"
              tw-re="round"
              class="lucide-icon lucide lucide-users tw-lj tw-xx tw-ny"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>

              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>

              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>

              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 class="text-white font-bold mb-2">Team Collaboration</h3>
          <p class="text-slate-400 text-sm">
            Work together seamlessly with role-based access and real-time updates.
          </p>
        </div>

        <div
          class="bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl shadow-blue-500/5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="mt-4 mb-2 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center w-[50px] sm:w-[15%] py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              tw-kj="2"
              tw-ng="round"
              tw-re="round"
              class="lucide-icon lucide lucide-globe tw-lj tw-xx tw-ny"
            >
              <circle cx="12" cy="12" r="10"></circle>

              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>

              <path d="M2 12h20"></path>
            </svg>
          </div>
          <h3 class="text-white font-bold mb-2">Global Infrastructure</h3>
          <p class="text-slate-400 text-sm">
            Deployed across 180+ locations worldwide for minimal latency.
          </p>
        </div>

        <div
          class="bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl shadow-blue-500/5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="mt-4 mb-2 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center w-[50px] sm:w-[15%] py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              tw-kj="2"
              tw-ng="round"
              tw-re="round"
              class="lucide-icon lucide lucide-trending-up tw-lj tw-xx tw-ny"
            >
              <path d="M16 7h6v6"></path>

              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
            </svg>
          </div>
          <h3 class="text-white font-bold mb-2">Scalable Solutions</h3>
          <p class="text-slate-400 text-sm">
            Grows with your business from startup to enterprise scale.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
    <h3
      class="text-center text-gray-200 text-4xl font-extrabold tracking-tighter leading-tight mb-1"
    >
      Built for every industry
    </h3>
    <p class="text-center text-gray-400 text-md leading-relaxed mb-1">
      From startups to enterprises, our AI platform adapts to your unique needs.
    </p>
    <div class="max-w-7xl mx-auto p-2 sm:p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="max-w-sm mx-auto bg-slate-900 border border-white/10 rounded-t-[2rem] rounded-b-[15px] overflow-hidden shadow-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
              alt="Project Preview"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div class="p-6">
            <h3 class="text-white font-bold text-lg">Developers</h3>
            <p class="text-slate-400 text-sm mt-2">
              Integrate AI into your applications with our robust API and SDKs.
            </p>
          </div>
        </div>
        <div
          class="max-w-sm mx-auto bg-slate-900 border border-white/10 rounded-t-[2rem] rounded-b-[15px] overflow-hidden shadow-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
              alt="Project Preview"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div class="p-6">
            <h3 class="text-white font-bold text-lg">Businesses</h3>
            <p class="text-slate-400 text-sm mt-2">
              Automate workflows and gain insights to drive growth and efficiency.
            </p>
          </div>
        </div>
        <div
          class="max-w-sm mx-auto bg-slate-900 border border-white/10 rounded-t-[2rem] rounded-b-[15px] overflow-hidden shadow-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80"
              alt="Project Preview"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div class="p-6">
            <h3 class="text-white font-bold text-lg">Researchers</h3>
            <p class="text-slate-400 text-sm mt-2">
              Access cutting-edge AI models for academic and scientific research.
            </p>
          </div>
        </div>
        <div
          class="max-w-sm mx-auto bg-slate-900 border border-white/10 rounded-t-[2rem] rounded-b-[15px] overflow-hidden shadow-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="relative h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
              alt="Project Preview"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div class="p-6">
            <h3 class="text-white font-bold text-lg">Healthcare</h3>
            <p class="text-slate-400 text-sm mt-2">
              Improve patient outcomes with AI-powered diagnostics and analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" class="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
    <h3
      class="text-center text-gray-200 text-4xl font-extrabold tracking-tighter leading-tight mb-1"
    >
      Simple, transparent pricing
    </h3>
    <p class="text-center text-gray-400 text-md leading-relaxed mb-1">
      Choose the perfect plan for your needs. Always know what you'll pay.
    </p>
    <div class="max-w-7xl mx-auto p-2 sm:p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl shadow-blue-500/5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 class="text-white font-bold mb-2">Starter</h3>
          <p class="text-slate-400 text-sm">Perfect for individuals and small projects.</p>
          <div class="font-extrabold tracking-tighter text-blue-500 flex-shrink-0 min-w-0 mt-2">
            <span class="text-4xl">$29 </span><span class="text-white text-xl">/month</span>
          </div>
          <button
            type="button"
            class="border border-white/10 shadow-xl px-5 py-2.5 rounded-3xl text-xs font-bold text-white sm:rounded-full sm:px-3 sm:py-2 sm:text-base hover:scale-105 transition-all duration-300 block text-center flex items-center justify-center w-full mt-2"
          >
            Start free Trial
          </button>
          <ul role="list" class="space-y-4 my-6">
            <li class="flex items-center">
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
              <span class="text-body">10,000 API calls/month</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Basic AI models</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Email support</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">1 team member</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Community access</span>
            </li>
          </ul>
        </div>

        <div
          class="bg-slate-900 border border-blue-600 p-6 rounded-3xl shadow-xl shadow-blue-500/5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 class="text-white font-bold mb-2">Professional</h3>
          <p class="text-slate-400 text-sm">For growing teams and businesses.</p>
          <div class="font-extrabold tracking-tighter text-blue-500 flex-shrink-0 min-w-0 mt-2">
            <span class="text-4xl">$99 </span><span class="text-white text-xl">/month</span>
          </div>
          <button
            type="button"
            class="bg-blue-600 border border-white/10 shadow-xl px-5 py-2.5 rounded-3xl text-xs font-bold text-white sm:rounded-full sm:px-3 sm:py-2 sm:text-base hover:scale-105 transition-all duration-300 block text-center flex items-center justify-center w-full mt-2"
          >
            Start free Trial
          </button>
          <ul role="list" class="space-y-4 my-6">
            <li class="flex items-center">
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
              <span class="text-body">100,000 API calls/month</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Advanced AI models</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Priority support</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">5 team members</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Custom integrations</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Analytics dashboard</span>
            </li>
          </ul>
        </div>

        <div
          class="bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-xl shadow-blue-500/5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 class="text-white font-bold mb-2">Enterprise</h3>
          <p class="text-slate-400 text-sm">For large organizations with custom needs.</p>
          <div class="font-extrabold tracking-tighter text-white-500 flex-shrink-0 min-w-0 mt-2">
            <span class="text-4xl">Custom </span>
          </div>
          <button
            type="button"
            class="border border-white/10 shadow-xl px-5 py-2.5 rounded-3xl text-xs font-bold text-white sm:rounded-full sm:px-3 sm:py-2 sm:text-base hover:scale-105 transition-all duration-300 block text-center flex items-center justify-center w-full mt-2"
          >
            Contact Sales
          </button>
          <ul role="list" class="space-y-4 my-6">
            <li class="flex items-center">
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
              <span class="text-body">Unlimited API calls</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">All AI models</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Dedicated support</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Unlimited team members</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Custom development</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">SLA guarantee</span>
            </li>
            <li class="flex items-center">
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
              <span class="text-body">Advanced security</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="faq" class="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
    <h3
      class="text-center text-gray-200 text-4xl font-extrabold tracking-tighter leading-tight mb-1"
    >
      Frequently asked questions
    </h3>
    <p class="text-center text-gray-400 text-md leading-relaxed mb-9">
      Everything you need to know about our platform and services.
    </p>
    <Faqs />
  </section>

  <Footers />
</template>
