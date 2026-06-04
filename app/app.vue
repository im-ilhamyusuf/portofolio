<script setup>
useSeoMeta({
  title: "Ilham Yusuf — Full-Stack & Mobile Engineer",
  ogTitle: "Ilham Yusuf — Full-Stack & Mobile Engineer",
  description:
    "Fullstack Developer dengan pengalaman membangun lebih dari 20 aplikasi produksi untuk sektor pendidikan, organisasi, dan bisnis. Berfokus pada pengembangan sistem yang scalable, efisien, dan mampu menyederhanakan proses bisnis melalui solusi digital.",
  ogDescription:
    "Fullstack Developer dengan pengalaman membangun lebih dari 20 aplikasi produksi untuk sektor pendidikan, organisasi, dan bisnis. Berfokus pada pengembangan sistem yang scalable, efisien, dan mampu menyederhanakan proses bisnis melalui solusi digital.",
  ogImage: "/og-image.png", // Siapkan gambar screenshot web Anda ukuran 1200x630 di folder public
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Navbar />
  <NuxtLayout>
    <Hero />
    <About />
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
