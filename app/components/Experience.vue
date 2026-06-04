<script setup>
const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2024 - Sekarang",
    description:
      "Memimpin tim pengembang untuk memigrasi arsitektur monolitik ke microfrontends menggunakan Nuxt 3, meningkatkan kecepatan muat halaman sebesar 40%.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Hub",
    period: "2022 - 2024",
    description:
      "Mengembangkan dan memelihara fitur-fitur utama pada aplikasi e-commerce menggunakan Node.js dan Vue.js, serta mengoptimalkan query database PostgreSQL.",
  },
];
</script>

<template>
  <section
    id="experience"
    class="bg-white border-y border-slate-100 py-20 overflow-hidden"
  >
    <div class="max-w-5xl mx-auto px-6">
      <h2
        data-aos="fade-up"
        class="text-2xl md:text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4 group"
      >
        <span class="text-indigo-600 font-mono text-xl">01.</span>
        Pengalaman Kerja
        <div
          class="hidden sm:block h-px bg-gradient-to-r from-slate-200 to-transparent flex-1 ml-2 group-hover:from-indigo-200 transition-all duration-500"
        ></div>
      </h2>

      <div
        class="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-200"
      >
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center pl-10 md:pl-0 mb-12"
        >
          <!-- Titik Timeline dengan Efek Pulse Balon -->
          <div
            class="absolute left-3.5 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow animate-pulse"
          ></div>

          <!-- Konten Kiri / Kanan Bergantian -->
          <div
            class="w-full md:w-[45%] md:text-right md:pr-8"
            :class="{
              'md:order-1 md:text-left md:pl-8 md:pr-0': index % 2 !== 0,
            }"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          >
            <span class="text-sm font-semibold text-indigo-600 font-mono">{{
              exp.period
            }}</span>
            <h3 class="text-lg font-bold text-slate-900 mt-1">
              {{ exp.role }}
            </h3>
            <p class="text-sm font-medium text-slate-400 mb-3">
              {{ exp.company }}
            </p>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ exp.description }}
            </p>
          </div>
          <div class="hidden md:block w-[45%]"></div>
        </div>
      </div>
    </div>
  </section>
</template>
