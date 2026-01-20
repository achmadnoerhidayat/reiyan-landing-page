import type { FaqsModel, PortfolioModel, SeoOptions } from '@/model/PortfolioModel'
import { useHead } from '@unhead/vue'
import type { PricePlan } from '@/model/PriceModel'
import type { ServiceItem } from '@/model/ServiceModel'
import { readonly, ref, computed, type Ref } from 'vue'

export function useService() {
  const service = ref<ServiceItem[]>([
    {
      title: 'Kecepatan Akses Maksimal (Modern Stack)',
      description: `Kami membangun sistem menggunakan framework Vue.js & Laravel untuk menghasilkan waktu
            muat (loading) yang instan. Performa website yang cepat bukan hanya soal kenyamanan,
            tapi juga faktor kunci dalam meningkatkan kepuasan pengunjung dan efisiensi sistem.`,
      icon: `<svg
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
            </svg>`,
    },
    {
      title: 'Struktur SEO yang Terstandarisasi',
      description: `Website dirancang dengan arsitektur kode yang bersih agar mudah dipahami oleh mesin pencari. Kami fokus pada optimasi teknis yang terukur untuk membantu website Anda mendapatkan visibilitas yang lebih baik dan posisi yang kompetitif di hasil pencarian Google.`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 3C4.13401 3 1 6.13401 1 10C1 13.866 4.13401 17 8 17H9.07089C9.02417 16.6734 9 16.3395 9 16C9 15.6605 9.02417 15.3266 9.07089 15H8C5.23858 15 3 12.7614 3 10C3 7.23858 5.23858 5 8 5H16C18.7614 5 21 7.23858 21 10C21 10.3428 20.9655 10.6775 20.8998 11.0008C21.4853 11.5748 21.9704 12.2508 22.3264 13C22.7583 12.0907 23 11.0736 23 10C23 6.13401 19.866 3 16 3H8ZM16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13ZM11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 17.0191 20.6951 17.967 20.1716 18.7574L22.7071 21.2929L21.2929 22.7071L18.7574 20.1716C17.967 20.6951 17.0191 21 16 21C13.2386 21 11 18.7614 11 16Z"></path></svg>`,
    },
    {
      title: 'Keamanan Data Standar Industri',
      description: `Kami menerapkan protokol keamanan berlapis dari Laravel untuk melindungi website Anda dari celah keamanan digital. Fokus kami adalah memastikan seluruh data bisnis dan transaksi Anda berada dalam lingkungan sistem yang aman dan terenkripsi.`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0002 2C15.8662 2 19.0002 5.13401 19.0002 9H20.0742C20.5967 9 21.0311 9.40231 21.0712 9.9233L21.9174 20.9233C21.9597 21.474 21.5477 21.9547 20.997 21.9971L20.9203 22H3.08008C2.52779 22 2.08008 21.5523 2.08008 21L2.08302 20.9233L2.92918 9.9233C2.96925 9.40231 3.4037 9 3.92623 9H5.0002C5.0002 5.13401 8.13421 2 12.0002 2ZM19.1472 11H4.8522L4.1592 20H19.8402L19.1472 11ZM14.0002 13V15H10.0002V13H14.0002ZM12.0002 4C9.31145 4 7.11838 6.12231 7.00482 8.78311L7.0002 9H17.0002C17.0002 6.31124 14.8779 4.11818 12.2171 4.00462L12.0002 4Z"></path></svg>`,
    },
    {
      title: 'Pengembangan Fitur Tanpa Batas (Scalability)',
      description: `Sistem kami bersifat fleksibel untuk dikembangkan seiring pertumbuhan bisnis Anda. Mulai dari integrasi pembayaran (Midtrans/Duitku), sistem logistik (KirimAja), hingga fitur custom lainnya dapat ditambahkan tanpa harus merombak ulang struktur utama.`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15 3H21V21H3V15H7V11H11V7H15V3Z"></path></svg>`,
    },
    {
      title: 'Infrastruktur Cloud yang Terkelola',
      description: `Website Anda ditempatkan pada infrastruktur cloud dengan resource yang stabil untuk menjamin uptime maksimal. Kami menangani manajemen server sepenuhnya agar Anda bisa fokus pada bisnis, lengkap dengan transparansi biaya perpanjangan tahunan.`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17 7C13.5705 7 10.6449 9.15804 9.50734 12.1903L11.3805 12.8927C12.2337 10.6185 14.4278 9 17 9C17.6983 9 18.3687 9.11928 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2C15.242 2 17.9693 4.20399 18.7652 7.19539C18.1973 7.0675 17.6065 7 17 7Z"></path></svg>`,
    },
    {
      title: 'Konsultasi Langsung dengan Engineer',
      description: `Kami memberikan dukungan teknis langsung tanpa perantara sales. Anda berkomunikasi dengan developer yang memahami setiap baris kode website Anda, memastikan setiap kebutuhan pengembangan atau kendala teknis dapat diselesaikan secara akurat.`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3Z"></path></svg>`,
    },
  ])

  return {
    // Gunakan readonly supaya data aman tidak bisa diubah-ubah dari component
    services: readonly(service),
  }
}

export function usePricePlan() {
  const plans = ref<PricePlan[]>([
    {
      id: 1,
      name: 'Maintenance & Fix',
      price: 300000,
      renewalPrice: 300000,
      description: 'Perbaikan Bug Vue / Laravel.',
      features: [
        { text: 'Diagnosa Masalah', isAvailable: true },
        { text: 'Optimasi Kecepatan', isAvailable: true },
        { text: 'Perbaikan Database', isAvailable: true },
        { text: 'Fix Layout', isAvailable: true },
        { text: 'Update Keamanan', isAvailable: true },
      ],
      ctaText: 'Pilih Paket Bug',
    },
    {
      id: 2,
      name: 'Lite (Landing Page)',
      price: 1500000,
      renewalPrice: 700000,
      description: 'Cocok untuk company profile atau portofolio.',
      features: [
        { text: '1-3 Halaman', isAvailable: true },
        { text: 'Selesai 1-3 Hari', isAvailable: true },
        { text: 'Single Page Design (Vue 3)', isAvailable: true },
        { text: 'Integrasi WhatsApp Chat', isAvailable: true },
        { text: 'Responsive Design (Mobile Friendly)', isAvailable: true },
        { text: 'Free Host + Domain', isAvailable: true },
        { text: 'Optimasi SEO', isAvailable: true },
      ],
      ctaText: 'Pilih Paket Lite',
    },
    {
      id: 3,
      name: 'Business Pro',
      price: 3500000,
      renewalPrice: 1000000,
      isPopular: true,
      description: 'Solusi lengkap untuk bisnis yang butuh fitur lebih.',
      features: [
        { text: '1-7 Halaman', isAvailable: true },
        { text: 'Selesai 15-25 Hari', isAvailable: true },
        { text: 'Dashboard Admin Full Akses', isAvailable: true },
        { text: 'Integrasi Payment Gateway', isAvailable: true },
        { text: 'Sistem Logistik', isAvailable: true },
        {
          text: 'Integrasi API (Data dari Klien)',
          isAvailable: true,
        },
        { text: 'Responsive Design', isAvailable: true },
        { text: 'Free Host + Domain', isAvailable: true },
        { text: 'Optimasi SEO', isAvailable: true },
      ],
      ctaText: 'Pilih Paket Bisnis',
    },
    {
      id: 4,
      name: 'Enterprise / Custom',
      price: 0, // 0 bisa diartikan "Hubungi Kami"
      renewalPrice: 0,
      description: 'Sistem khusus (ERP, CRM, Marketplace) sesuai request.',
      features: [
        { text: 'Selesai 30 Hari', isAvailable: true },
        { text: 'High-End Tech Stack (Laravel Vue)', isAvailable: true },
        { text: 'Modern UI/UX Design', isAvailable: true },
        { text: 'Dashboard Admin', isAvailable: true },
        { text: 'Database Kompleks & Reporting', isAvailable: true },
        { text: 'Integrasi API (Data dari Klien)', isAvailable: true },
        { text: 'Keamanan Berlapis', isAvailable: true },
        { text: 'Responsive Design', isAvailable: true },
        { text: 'Free Host + Domain', isAvailable: true },
        { text: 'Optimasi SEO', isAvailable: true },
        { text: 'Support Maintenance 1 Bulan', isAvailable: true },
      ],
      ctaText: 'Konsultasi Sekarang',
    },
  ])

  // Fungsi helper untuk format mata uang
  const formatCurrency = (value: number) => {
    if (value === 0) return 'Custom'
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const formatChat = (paket: string) => {
    const phone = '6281224738582'
    const pesan = `Halo Admin Reiyandev, saya tertarik dengan paket ${paket}`
    return `https://wa.me/${phone}?text=${encodeURIComponent(pesan)}`
  }

  return {
    plans: readonly(plans),
    formatCurrency,
    formatChat,
  }
}

export function usePortfolio() {
  const port = ref<PortfolioModel[]>([
    {
      title: 'Reiyan Movie',
      deskripsi:
        'Aplikasi katalog film modern berbasis Vue JS yang menyajikan data real-time dengan performa maksimal. Fokus pada antarmuka yang bersih dan kecepatan akses tinggi, platform ini memberikan pengalaman navigasi yang mulus bagi pengguna untuk menjelajahi ribuan data film secara instan dan responsif.',
      image: '/image/reiyan-movie.png',
      link: 'https://reiyan-film.vercel.app',
    },
    {
      title: 'Ayokulakan',
      deskripsi:
        'Platform E-commerce Multi-vendor dengan fitur pembayaran otomatis, integrasi API logistik Travel PPOB, dan sistem notifikasi real-time.',
      image: '/image/ayokulakan.png',
      link: 'https://ayokulakan.com',
    },
    {
      title: 'Quranqita',
      deskripsi:
        'Platform ekosistem Islami terintegrasi dengan fitur berlangganan, donasi, kursus interaktif (LMS), dan sistem koin untuk konten premium..',
      image: '/image/quranqita.png',
      link: 'https://quranqita.pro',
    },
  ])

  return {
    port: readonly(port),
  }
}

export function useFaq() {
  const faq = ref<FaqsModel[]>([
    {
      title: 'Apakah saya akan mendapatkan file kodingan aslinya (Source Code)?',
      deskripsi:
        'Ya, tentu saja. Seluruh kode sumber (source code) akan menjadi hak milik Anda sepenuhnya setelah proyek selesai dan pelunasan dilakukan. Saya akan menyerahkan repositori atau file kodingan dalam kondisi bersih dan terdokumentasi.',
    },
    {
      title: 'Bagaimana jika website saya mengalami error setelah serah terima?',
      deskripsi:
        'Saya memberikan garansi perbaikan bug gratis selama 30 hari pertama setelah website mengudara (live). Jika ada kesalahan teknis dari sisi kodingan saya, saya akan memperbaikinya tanpa biaya tambahan.',
    },
    {
      title: 'Kenapa harga "Custom Feature" dan "Full Build" menggunakan estimasi "Mulai dari"?',
      deskripsi:
        'Karena setiap bisnis memiliki kompleksitas yang berbeda. Harga akhir sangat bergantung pada jumlah halaman, tingkat kerumitan fitur (seperti integrasi API pihak ketiga), dan batas waktu pengerjaan. Konsultasi awal diperlukan untuk memberikan penawaran harga yang paling adil.',
    },
    {
      title: 'Apakah biaya paket sudah termasuk domain dan hosting?',
      deskripsi:
        'Khusus untuk paket Lite (Landing Page) & Business Pro, biaya sudah termasuk sewa Domain (.com,.id) dan Cloud Hosting selama 1 tahun pertama. Untuk paket Bug Fix atau Tambah Fitur, pengerjaan dilakukan di server yang sudah Anda miliki.',
    },
    {
      title: 'Berapa lama waktu yang dibutuhkan untuk membuat satu website?',
      deskripsi:
        'Untuk pengerjaan Bug Fix biasanya selesai dalam 1-2 hari. Penambahan fitur memakan waktu 3-7 hari, sedangkan pembuatan website utuh dari nol rata-rata membutuhkan waktu 14-30 hari kerja tergantung kompleksitas sistem.',
    },
    {
      title: 'Apakah website buatan Reiyan.Dev bisa saya kelola sendiri kontennya?',
      deskripsi:
        'Sangat bisa. Setiap website yang saya bangun (khususnya paket Business Pro) sudah dilengkapi dengan Dashboard Admin yang intuitif. Anda bisa mengubah teks, gambar, dan konten lainnya tanpa perlu mengerti bahasa pemrograman.',
    },
  ])

  return {
    faq: readonly(faq),
  }
}

export function useAppSeo(options: Ref<SeoOptions | null>) {
  useHead(
    computed(() => {
      const fullTitle = `${options.value?.title} | Reiyan Dev`
      const fullDesc = options.value?.description.substring(0, 160)
      const siteUrl = 'https://reiyan-landing-page.vercel.app'

      return {
        title: fullTitle,
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/image/reiyan.png',
          },
        ],
        meta: [
          { name: 'description', content: fullDesc },
          { property: 'og:title', content: fullTitle },
          { property: 'og:description', content: fullDesc },
          { property: 'og:image', content: options.value?.image || `${siteUrl}/image/reiyan.png` },
          { property: 'og:type', content: options.value?.type || 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: fullTitle },
          { name: 'twitter:description', content: fullDesc },
        ],
      }
    }),
  )
}
