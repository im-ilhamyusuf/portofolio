<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const words = [
  "Sistem Informasi Akademik.",
  "Aplikasi Bisnis Terintegrasi.",
  "Sistem Administrasi Digital.",
  "Otomasi Alur Kerja.",
];

const displayText = ref("");
const wordIndex = ref(0);
const isDeleting = ref(false);

let timer = null;

const typeEffect = () => {
  const currentWord = words[wordIndex.value];

  if (isDeleting.value) {
    displayText.value = currentWord.substring(
      0,
      displayText.value.length - 1
    );
  } else {
    displayText.value = currentWord.substring(
      0,
      displayText.value.length + 1
    );
  }

  let delay = isDeleting.value ? 35 : 75;

  if (!isDeleting.value && displayText.value === currentWord) {
    isDeleting.value = true;
    delay = 1800;
  } else if (isDeleting.value && displayText.value === "") {
    isDeleting.value = false;
    wordIndex.value = (wordIndex.value + 1) % words.length;
    delay = 350;
  }

  timer = setTimeout(typeEffect, delay);
};

onMounted(() => {
  typeEffect();
});

onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<template>
  <section
    id="home"
    class="relative isolate flex min-h-[85svh] scroll-mt-24
      flex-col justify-center overflow-hidden
      px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32"
  >
    <!-- Dekorasi latar -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 -top-32
        -z-10 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl"
    />

    <div class="mx-auto w-full max-w-6xl">
      <div class="max-w-4xl">
        <!-- Label profesional -->
        <p
          data-aos="fade-up"
          class="mb-5 inline-flex items-center gap-2
            rounded-full border border-indigo-100 bg-indigo-50
            px-4 py-2 text-sm font-semibold text-indigo-700"
        >
          <span
            class="h-2 w-2 rounded-full bg-indigo-600"
            aria-hidden="true"
          />
          Full-Stack Developer
        </p>

        <!-- Headline utama -->
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          class="mb-5 text-4xl font-bold leading-tight
            tracking-tight text-slate-900
            sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Membangun Sistem Digital
          <span class="text-indigo-600">
            untuk Menyederhanakan Pekerjaan.
          </span>
        </h1>

        <!-- Headline dinamis -->
        <div
          class="mb-6 min-h-[4.5rem] sm:min-h-[5rem]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p
            class="mb-2 text-sm font-medium uppercase
              tracking-widest text-slate-500"
          >
            Fokus pengembangan
          </p>

          <p
            class="text-2xl font-bold leading-snug text-indigo-600
              sm:text-3xl md:text-4xl"
          >
            <span aria-hidden="true">{{ displayText }}</span>
            <span
              aria-hidden="true"
              class="ml-1 inline-block animate-pulse font-light"
            >|</span>
            <span class="sr-only">
              Sistem Informasi Akademik, Aplikasi Bisnis
              Terintegrasi, Sistem Administrasi Digital,
              dan Otomasi Alur Kerja.
            </span>
          </p>
        </div>

        <!-- Deskripsi -->
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          class="mb-8 max-w-3xl text-base leading-8
            text-slate-600 sm:text-lg"
        >
          Saya membantu institusi pendidikan, organisasi, dan bisnis
          mengembangkan aplikasi web yang sesuai dengan kebutuhan
          dan alur kerja mereka. Dengan pengalaman lebih dari
          <strong class="font-semibold text-slate-900">
            8 tahun
          </strong>
          dan lebih dari
          <strong class="font-semibold text-slate-900">
            20 sistem produksi
          </strong>,
          saya berfokus pada solusi digital yang terintegrasi,
          mudah digunakan, dan siap dikembangkan.
        </p>

        <!-- CTA -->
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            class="inline-flex min-h-12 items-center justify-center
              gap-2 rounded-xl bg-indigo-600 px-6 py-3
              font-semibold text-white shadow-lg
              shadow-indigo-600/20 transition duration-300
              hover:-translate-y-0.5 hover:bg-indigo-700
              hover:shadow-xl focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-indigo-600
              focus-visible:ring-offset-2"
          >
            Diskusikan Proyek Anda
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="#projects"
            class="inline-flex min-h-12 items-center justify-center
              rounded-xl border border-slate-300 bg-white px-6 py-3
              font-semibold text-slate-700 transition duration-300
              hover:border-indigo-300 hover:bg-indigo-50
              hover:text-indigo-700 focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-indigo-600
              focus-visible:ring-offset-2"
          >
            Lihat Studi Kasus
          </a>
        </div>

        <!-- Statistik -->
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          class="mt-12 grid grid-cols-2 gap-x-6 gap-y-7
            border-t border-slate-200 pt-8 sm:grid-cols-4"
        >
          <div>
            <p class="text-3xl font-bold tracking-tight text-indigo-600">
              8+
            </p>
            <p class="mt-1 text-sm leading-6 text-slate-600">
              Tahun pengalaman
            </p>
          </div>

          <div>
            <p class="text-3xl font-bold tracking-tight text-indigo-600">
              20+
            </p>
            <p class="mt-1 text-sm leading-6 text-slate-600">
              Sistem produksi
            </p>
          </div>

          <div>
            <p class="text-3xl font-bold tracking-tight text-indigo-600">
              10+
            </p>
            <p class="mt-1 text-sm leading-6 text-slate-600">
              Sistem kampus
            </p>
          </div>

          <div>
            <p class="text-3xl font-bold tracking-tight text-indigo-600">
              1000+
            </p>
            <p class="mt-1 text-sm leading-6 text-slate-600">
              Pengguna aktif
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
