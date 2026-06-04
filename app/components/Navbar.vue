<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// State untuk mengontrol menu mobile & bayangan navbar saat di-scroll
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { name: "Tentang Saya", href: "#about" },
  { name: "Projek", href: "#projects" },
  { name: "Technology Expertise", href: "#skills" },
  { name: "Kontak", href: "#contact" },
];

// Deteksi scroll untuk menambahkan efek bayangan (shadow) pada navbar
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/5080 backdrop-blur-md border-b border-slate-100 shadow-sm py-4'
        : 'bg-transparent py-6',
    ]"
  >
    <div class="max-w-5xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo / Inisial -->
      <a
        href="#"
        class="text-xl font-bold tracking-tight text-slate-900 font-mono hover:text-indigo-600 transition-colors"
      >
        IY<span class="text-indigo-600">.</span>
      </a>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex items-center gap-8">
        <ul class="flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              class="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <!-- Button CTA Resume -->
        <a
          href="/resume.pdf"
          target="_blank"
          class="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200"
        >
          Unduh CV
        </a>
      </div>

      <!-- Mobile Menu Button (Hamburger) -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="block md:hidden text-slate-600 hover:text-slate-900 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 md:hidden flex flex-col gap-4"
      >
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click="isMenuOpen = false"
          class="text-base font-medium text-slate-600 hover:text-indigo-600 py-1 transition-colors"
        >
          {{ link.name }}
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          class="w-full text-center px-4 py-2.5 text-base font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
        >
          Unduh CV
        </a>
      </div>
    </transition>
  </nav>
</template>
