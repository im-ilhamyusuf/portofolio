<script setup>
const featuredProjects = [
  {
    title: "AISNET",
    category: "Academic Information System",
    year: "2022",
    description:
      "Platform akademik terintegrasi yang menghubungkan mahasiswa, dosen, dan administrator dalam satu ekosistem digital. Mendukung manajemen perkuliahan, kontrak studi, jadwal, absensi, transkrip, administrasi akademik, pengaduan, hingga aktivitas penelitian dosen.",
    tech: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
  },
  {
    title: "PPIC",
    category: "Enterprise Resource Planning (ERP)",
    year: "2024",
    description:
      "Platform ERP untuk UMKM yang mengintegrasikan manajemen pembelian, inventori, produksi, penjualan, customer relationship management (CRM), dan distribusi dalam satu sistem terpusat.",
    tech: ["Laravel", "Bootstrap", "MySQL"],
  },
  {
    title: "SIKETIK V2",
    category: "Internship Management System",
    year: "2025",
    description:
      "Sistem manajemen kerja praktik yang mengotomatisasi proses pengajuan, validasi, penempatan dosen pembimbing, bimbingan, sidang, penilaian, hingga pengelolaan insentif dalam satu alur kerja terintegrasi.",
    tech: ["Laravel", "Livewire", "Booststrap", "MySQL"],
  },
  {
    title: "KKN",
    category: "Community Service Management Platform",
    year: "2025",
    description:
      "Platform digital untuk mengelola seluruh siklus kegiatan Kuliah Kerja Nyata mulai dari validasi administrasi, pembentukan kelompok, pelaksanaan program kerja, pelaporan, hingga evaluasi dan penilaian peserta.",
    tech: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
  },
  {
    title: "ETP V2",
    category: "English Testing & Learning Platform",
    year: "2026",
    description:
      "Platform pembelajaran dan pengujian bahasa Inggris yang mengintegrasikan simulasi ujian, penilaian otomatis, manajemen peserta, serta program short course intensif selama dua minggu untuk meningkatkan kesiapan peserta menghadapi tes kompetensi bahasa Inggris.",
    tech: ["Laravel", "Filament", "Nuxt.js", "Bootstrap", "MySQL"],
  },
  {
    title: "SKPI V2",
    category: "Academic Document Management System",
    year: "2024",
    description:
      "Sistem pengelolaan Surat Keterangan Pendamping Ijazah yang mendukung proses validasi, verifikasi, penerbitan, dan arsip dokumen akademik secara digital dan terstruktur.",
    tech: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
  },
];

import { ref } from "vue";

const showOtherProjects = ref(false);

const otherProjects = [
  {
    title: "SILAFA",
    category: "Faculty Administration System",
    year: "2024",
  },
  {
    title: "SITA",
    category: "Final Project Management System",
    year: "2023",
  },
  {
    title: "SIAM",
    category: "Academic Advisory System",
    year: "2020",
  },
  {
    title: "Hotline Pengaduan",
    category: "Complaint Management System",
    year: "2021",
  },
  {
    title: "Ekonomi Kreatif",
    category: "Business Management Platform",
    year: "2024",
  },
  {
    title: "Sistem Organisasi",
    category: "Organization Management System",
    year: "2023",
  },
  {
    title: "Undangan Online",
    category: "Digital Invitation Platform",
    year: "2023",
  },
  {
    title: "AI Prediksi Kelulusan",
    category: "Artificial Intelligence",
    year: "2020",
  },
  {
    title: "AI Prediksi Nilai UN",
    category: "Artificial Intelligence",
    year: "2020",
  },
  {
    title: "Mobile E-Perpustakaan",
    category: "Mobile Application",
    year: "2019",
  },
  {
    title: "Web E-Perpustakaan",
    category: "Library Information System",
    year: "2018",
  },
];
</script>

<template>
  <section
    id="projects"
    class="border-y border-slate-100 py-20 overflow-hidden"
  >
    <div class="max-w-5xl mx-auto px-6">
      <h2
        data-aos="fade-up"
        class="text-2xl md:text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4 group"
      >
        <span class="text-indigo-600 font-mono text-xl">02.</span>
        Projek Pilihan
        <div
          class="hidden sm:block h-px bg-gradient-to-r from-slate-200 to-transparent flex-1 ml-2 group-hover:from-indigo-200 transition-all duration-500"
        ></div>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in featuredProjects"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col justify-between group"
        >
          <div>
            <h3
              class="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300"
            >
              <a
                :href="project.link"
                target="_blank"
                class="flex items-center gap-2"
              >
                {{ project.title }}
              </a>
            </h3>
            <p class="text-xs text-slate-500 mb-3">
              {{ project.category }}
            </p>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
              {{ project.description }}
            </p>
          </div>
          <div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in project.tech"
                :key="t"
                class="bg-slate-50 text-slate-600 text-xs font-mono px-2.5 py-1 rounded border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors duration-300"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" class="flex justify-center mt-10">
        <button
          @click="showOtherProjects = !showOtherProjects"
          class="group flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-all duration-300"
        >
          <span>
            {{
              showOtherProjects
                ? "Sembunyikan proyek lainnya"
                : `Tampilkan ${otherProjects.length} proyek lainnya`
            }}
          </span>

          <svg
            class="w-4 h-4 transition-transform duration-300"
            :class="{ 'rotate-180': showOtherProjects }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[1000px]"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-[1000px]"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="showOtherProjects" class="overflow-hidden mt-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="project in otherProjects"
              :key="project.title"
              class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div class="flex justify-between items-start mb-2">
                <h4 class="font-semibold text-slate-900">
                  {{ project.title }}
                </h4>

                <span class="text-xs text-slate-400">
                  {{ project.year }}
                </span>
              </div>

              <p class="text-xs text-slate-500">
                {{ project.category }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
