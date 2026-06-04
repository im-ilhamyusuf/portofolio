<script setup>
import { ref, onMounted } from "vue";

const words = [
  "Enterprise Systems.",
  "Web Applications.",
  "Mobile Applications.",
  "Workflow Automation.",
  "Digital Experiences.",
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
    <h2
      data-aos="fade-up"
      data-aos-delay="300"
      class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400 tracking-tight mb-6 lg:whitespace-nowrap overflow-visible leading-tight lg:leading-normal"
    >
      Merancang & Mengembangkan
      <span
        class="text-indigo-600 block lg:inline-block lg:ml-2 whitespace-nowrap select-none"
      >
        {{ displayText }}<span class="animate-pulse font-light">|</span>
      </span>
    </h2>
    <p
      data-aos="fade-up"
      data-aos-delay="400"
      class="text-base md:text-lg text-slate-600 max-w-3xl mb-8 leading-relaxed"
    >
      Seorang
      <span class="text-slate-900 font-semibold">Software Engineer</span> dengan
      spesialisasi utama pada ekosistem
      <span class="text-indigo-600 font-medium">Nuxt.js</span> dan
      <span class="text-indigo-600 font-medium">Laravel</span>. Saya
      berpengalaman merancang arsitektur web modern menggunakan
      <span class="text-slate-900 font-medium">Vue, Django,</span> dan
      <span class="text-slate-900 font-medium">CodeIgniter</span>, serta
      membangun aplikasi mobile lintas platform yang responsif menggunakan
      <span class="text-slate-900 font-medium">React Native</span> dan
      <span class="text-slate-900 font-medium">Flutter</span>.
    </p>
    <div data-aos="fade-up" data-aos-delay="500" class="flex flex-wrap gap-4">
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

    <div
      data-aos="fade-up"
      data-aos-delay="600"
      class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
    >
      <div>
        <h3 class="text-3xl font-bold text-indigo-600">10+</h3>
        <p>Sistem Produksi</p>
      </div>

      <div>
        <h3 class="text-3xl font-bold text-indigo-600">20+</h3>
        <p>Modul Bisnis</p>
      </div>

      <div>
        <h3 class="text-3xl font-bold text-indigo-600">1000+</h3>
        <p>Pengguna</p>
      </div>

      <div>
        <h3 class="text-3xl font-bold text-indigo-600">5+</h3>
        <p>Tahun Pengalaman</p>
      </div>
    </div>
  </section>
</template>
