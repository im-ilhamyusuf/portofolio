<script setup>
const projects = [
  {
    title: "AISNET",
    category: "Academic Information System",
    year: "2022",
    description:
      "Sistem informasi akademik terintegrasi untuk mahasiswa, dosen, dan administrator. Mendukung kontrak perkuliahan, jadwal, absensi, transkrip, administrasi akademik, pengaduan, dan penelitian dosen.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "KKN",
    category: "Kuliah Kerja Nyata Management",
    year: "2025",
    description:
      "Sistem pengelolaan KKN mulai dari validasi keuangan, pendaftaran, plotting kelompok, program kerja, laporan harian, laporan akhir, hingga penilaian.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "SIKETIK V2",
    category: "Internship Management System",
    year: "2025",
    description:
      "Sistem kerja praktik yang mengelola proses pengajuan, validasi, bimbingan, sidang, penilaian, hingga pencairan insentif dosen pembimbing dan penguji.",
    tech: ["Laravel", "Livewire", "MySQL"],
  },
  {
    title: "ETP V2",
    category: "Tracer Study System",
    year: "2026",
    description:
      "Platform tracer study alumni untuk pengumpulan data lulusan, evaluasi kompetensi, dan analisis karier alumni.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "SKPI V2",
    category: "Academic Document System",
    year: "2024",
    description:
      "Sistem pengelolaan Surat Keterangan Pendamping Ijazah yang mendukung validasi, verifikasi, dan penerbitan dokumen akademik.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "SILAFA",
    category: "Faculty Administration System",
    year: "2024",
    description:
      "Sistem layanan administrasi fakultas berbasis digital untuk mempercepat proses pengajuan dan persetujuan dokumen.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "SITA",
    category: "Final Project Management System",
    year: "2023",
    description:
      "Sistem pengelolaan tugas akhir mahasiswa mulai dari pengajuan judul, bimbingan, seminar, hingga sidang.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "SIAM",
    category: "Academic Advisory System",
    year: "2020",
    description:
      "Sistem perwalian online yang memudahkan komunikasi dan monitoring akademik antara dosen wali dan mahasiswa.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "Hotline Pengaduan",
    category: "Complaint Management System",
    year: "2021",
    description:
      "Platform pengaduan online yang memfasilitasi pelaporan dan tindak lanjut berbagai keluhan secara terstruktur.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "PIC",
    category: "Person In Charge Management System",
    year: "2024",
    description:
      "Sistem pengelolaan penanggung jawab kegiatan dan monitoring progres pekerjaan dalam organisasi.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "Ekonomi Kreatif",
    category: "Business Management Platform",
    year: "2024",
    description:
      "Platform digital untuk mendukung pengelolaan program dan aktivitas ekonomi kreatif.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "Sistem Organisasi",
    category: "Organization Management System",
    year: "2023",
    description:
      "Sistem informasi organisasi yang mendukung administrasi, pengelolaan anggota, dan aktivitas organisasi.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "Undangan Online",
    category: "Digital Invitation Platform",
    year: "2023",
    description:
      "Platform pembuatan dan pengelolaan undangan digital dengan dukungan RSVP dan berbagi melalui media sosial.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "ETP V1",
    category: "Tracer Study System",
    year: "2021",
    description:
      "Versi awal sistem tracer study untuk pengumpulan data alumni dan evaluasi lulusan.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "SIKETIK V1",
    category: "Internship Management System",
    year: "2021",
    description:
      "Versi awal sistem kerja praktik yang mendukung proses administrasi dan bimbingan mahasiswa.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "SKPI V1",
    category: "Academic Document System",
    year: "2020",
    description:
      "Versi awal sistem Surat Keterangan Pendamping Ijazah berbasis web.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "AI Prediksi Kelulusan",
    category: "Artificial Intelligence",
    year: "2020",
    description:
      "Sistem prediksi kelulusan mahasiswa menggunakan metode Artificial Neural Network untuk mendukung pengambilan keputusan akademik.",
    tech: ["Python", "ANN", "Machine Learning", "MySQL"],
  },
  {
    title: "AI Prediksi Nilai UN",
    category: "Artificial Intelligence",
    year: "2020",
    description:
      "Sistem prediksi hasil Ujian Nasional menggunakan algoritma Naive Bayes.",
    tech: ["Python", "Naive Bayes", "Machine Learning", "MySQL"],
  },
  {
    title: "Mobile E-Perpustakaan",
    category: "Mobile Application",
    year: "2019",
    description:
      "Aplikasi perpustakaan digital berbasis mobile yang memudahkan pencarian dan peminjaman koleksi.",
    tech: ["React Native", "Laravel", "MySQL"],
  },
  {
    title: "Web E-Perpustakaan",
    category: "Library Information System",
    year: "2018",
    description:
      "Sistem informasi perpustakaan berbasis web untuk pengelolaan koleksi, anggota, dan transaksi peminjaman.",
    tech: ["CodeIgniter", "MySQL"],
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
          v-for="(project, index) in projects"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 flex flex-col justify-between group"
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
    </div>
  </section>
</template>
