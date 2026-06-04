<script setup>
import { ref, onMounted } from "vue";

const words = [
  "Academic Information Systems.",
  "Enterprise Applications.",
  "Workflow Automation.",
  "Business Solutions.",
  "Digital Platforms.",
];
const displayText = ref("");
const wordIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = ref(150);

const typeEffect = () => {
  const currentWord = words[wordIndex.value];

  if (isDeleting.value) {
    // Efek Menghapus
    displayText.value = currentWord.substring(0, displayText.value.length - 1);
    typingSpeed.value = 75; // Menghapus biasanya lebih cepat
  } else {
    // Efek Mengetik
    displayText.value = currentWord.substring(0, displayText.value.length + 1);
    typingSpeed.value = 150;
  }

  // Logika pergantian kata
  if (!isDeleting.value && displayText.value === currentWord) {
    typingSpeed.value = 2000; // Jeda diam saat kata sudah lengkap terketik (2 detik)
    isDeleting.value = true;
  } else if (isDeleting.value && displayText.value === "") {
    isDeleting.value = false;
    wordIndex.value = (wordIndex.value + 1) % words.length;
    typingSpeed.value = 500; // Jeda sebelum mulai mengetik kata baru
  }

  setTimeout(typeEffect, typingSpeed.value);
};

onMounted(() => {
  typeEffect();
});
</script>

<template>
  <section
    class="max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col justify-center min-h-[85vh]"
  >
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      class="text-indigo-600 font-semibold tracking-wide mb-3 text-sm md:text-base"
    >
      Halo, nama saya
    </p>
    <h1
      data-aos="fade-up"
      data-aos-delay="200"
      class="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4"
    >
      Ilham Yusuf<span class="text-indigo-600">.</span>
    </h1>
    <div class="mb-6">
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400"
      >
        Merancang & Mengembangkan
      </h2>

      <h2
        data-aos="fade-up"
        data-aos-delay="500"
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-600 mt-2"
      >
        {{ displayText }}
        <span class="animate-pulse font-light">|</span>
      </h2>
    </div>
    <p
      data-aos="fade-up"
      data-aos-delay="600"
      class="text-base md:text-lg text-slate-600 mb-8 leading-relaxed"
    >
      Fullstack Developer dengan pengalaman lebih dari
      <span class="font-semibold text-slate-900">8 tahun</span>
      dalam membangun sistem informasi akademik, administrasi, organisasi, dan
      aplikasi bisnis berbasis web. Telah mengembangkan lebih dari
      <span class="font-semibold text-slate-900">20 aplikasi produksi</span>
      menggunakan Laravel, Vue, Nuxt, Livewire, dan teknologi modern lainnya
      untuk mendukung kebutuhan mahasiswa, dosen, organisasi, dan berbagai
      proses bisnis digital.
    </p>
    <div data-aos="fade-up" data-aos-delay="700">
      <div class="flex flex-wrap gap-4">
        <a
          href="#projects"
          class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-200 hover:shadow-lg"
        >
          Lihat Projek
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          class="px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium rounded-lg transition-all duration-300 hover:bg-slate-50"
        >
          Unduh CV
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div>
          <h3 class="text-3xl font-bold text-indigo-600">20+</h3>
          <p>Sistem Produksi</p>
        </div>

        <div>
          <h3 class="text-3xl font-bold text-indigo-600">8+</h3>
          <p>Tahun Pengalaman</p>
        </div>

        <div>
          <h3 class="text-3xl font-bold text-indigo-600">10+</h3>
          <p>Sistem Kampus</p>
        </div>

        <div>
          <h3 class="text-3xl font-bold text-indigo-600">1000+</h3>
          <p>Pengguna Aktif</p>
        </div>
      </div>
    </div>
  </section>
</template>
