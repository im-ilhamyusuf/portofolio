<script setup>
useSeoMeta({
  title: "Ilham Yusuf — Full-Stack & Mobile Engineer",
  ogTitle: "Ilham Yusuf — Portofolio Profesional",
  description:
    "Software Engineer berpengalaman dalam membangun aplikasi web skala besar dengan Laravel, Nuxt.js, dan React Native.",
  ogDescription:
    "Software Engineer berpengalaman dalam membangun aplikasi web skala besar dengan Laravel, Nuxt.js, dan React Native.",
  ogImage: "/og-image.jpg", // Siapkan gambar screenshot web Anda ukuran 1200x630 di folder public
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Navbar />
  <NuxtLayout>
    <Hero />
    <Experience />
    <Projects />
    <Skills />
    <Footer />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}
</style>
