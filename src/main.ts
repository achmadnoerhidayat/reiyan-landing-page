import './assets/main.css'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'
import routes from './router' // Pastikan ini mengarah ke file router utama kamu

// Kita tidak pakai createApp(App) biasa lagi
export const createApp = ViteSSG(
  // 1. Root Component
  App,
  // 2. Opsi Router (menggunakan routes yang sudah kita pecah tadi)
  { routes },
  // 3. Fungsi Hook untuk install plugin
  ({ app, router, routes, isClient }) => {
    // Install Pinia
    const pinia = createPinia()
    app.use(pinia)

    // Jika ada plugin lain (misal: i18n atau library UI), pasang di sini

    // isClient berguna jika kamu punya kode yang HANYA boleh jalan di browser
    if (isClient) {
      // Contoh: Analytics atau pengecekan localStorage
    }
  }
)
