<script setup>
const projects = [
  {
    title: "Enterprise ERP System",
    description:
      "Sistem manajemen sumber daya perusahaan terintegrasi dengan modul analitik real-time dan manajemen inventaris.",
    tech: ["Nuxt 3", "Tailwind CSS", "TypeScript", "NestJS"],
    link: "#",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Dashboard analitik performa web yang memproses jutaan data per hari dengan grafik interaktif.",
    tech: ["Vue 3", "Chart.js", "Tailwind", "Go"],
    link: "#",
  },
];
</script>

<template>
  <section id="projects" class="max-w-5xl mx-auto px-6 py-20">
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
        :data-aos-delay="index * 150"
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
  </section>
</template>
