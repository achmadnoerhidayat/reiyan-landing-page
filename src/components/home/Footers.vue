<script setup>
const year = new Date().getFullYear()
</script>
<template>
  <footer class="bg-[#030712] pt-20 pb-10 px-8 border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
        <div class="space-y-6 col-span-2">
          <div class="flex items-center gap-2 text-xl font-extrabold tracking-tighter">
            <span class="text-blue-500">&lt;/&gt;</span>
            <span>Reiyan.Dev</span>
          </div>
          <p class="text-gray-500 text-sm leading-relaxed max-w-xs">
            Solusi profesional untuk perbaikan sistem, penambahan fitur custom, hingga pembangunan
            infrastruktur web baru. Menggunakan teknologi Laravel & Vue.js untuk menjamin kecepatan
            akses maksimal dan struktur yang ramah mesin pencari.
          </p>
        </div>

        <div class="space-y-6">
          <h4 class="font-bold text-sm uppercase tracking-widest text-white">Product</h4>
          <ul class="space-y-4 text-gray-500 text-sm">
            <li class="hover:text-blue-500 transition cursor-default">Features</li>
            <li class="hover:text-blue-500 transition cursor-default">Pricing</li>
            <li class="hover:text-blue-500 transition cursor-default">API</li>
            <li class="hover:text-blue-500 transition cursor-default">Integrations</li>
          </ul>
        </div>

        <div class="space-y-6">
          <h4 class="font-bold text-sm uppercase tracking-widest text-white">Company</h4>
          <ul class="space-y-4 text-gray-500 text-sm">
            <li class="hover:text-blue-500 transition cursor-default">About</li>
            <li class="hover:text-blue-500 transition cursor-default">Blog</li>
            <li class="hover:text-blue-500 transition cursor-default">Careers</li>
            <li class="hover:text-blue-500 transition cursor-default">Contact</li>
          </ul>
        </div>

        <div class="space-y-6">
          <h4 class="font-bold text-sm uppercase tracking-widest text-white">Resources</h4>
          <ul class="space-y-4 text-gray-500 text-sm">
            <li class="hover:text-blue-500 transition cursor-default">Documentation</li>
            <li class="hover:text-blue-500 transition cursor-default">Help Center</li>
            <li class="hover:text-blue-500 transition cursor-default">Community</li>
            <li class="hover:text-blue-500 transition cursor-default">Status</li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-white/5 text-center">
        <p class="text-gray-600 text-xs tracking-widest">
          ©
          <span id="year">
            {{ year }}
          </span>
          Reiyan.AI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
