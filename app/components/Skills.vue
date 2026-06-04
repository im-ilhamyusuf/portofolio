<script setup>
const skillGroups = [
  {
    category: "Frontend Development",
    skills: [
      {
        name: "Vue.js",
        style:
          "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:border-green-300",
      },
      {
        name: "Nuxt.js",
        style:
          "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300",
      },
      {
        name: "Tailwind CSS",
        style:
          "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:border-sky-300",
      },
      {
        name: "Bootstrap",
        style:
          "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 hover:border-purple-300",
      },
      {
        name: "JavaScript",
        style:
          "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300",
      },
    ],
  },

  {
    category: "Backend Development",
    skills: [
      {
        name: "Laravel",
        style:
          "bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:border-red-300",
      },
      {
        name: "Livewire",
        style:
          "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300",
      },
      {
        name: "Filament",
        style:
          "bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:border-red-300",
      },
      {
        name: "Django",
        style:
          "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 hover:border-teal-300",
      },
      {
        name: "CodeIgniter",
        style:
          "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300",
      },
      {
        name: "REST API",
        style:
          "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300",
      },
    ],
  },

  {
    category: "Mobile Development",
    skills: [
      {
        name: "Flutter",
        style:
          "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300",
      },
      {
        name: "React Native",
        style:
          "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300",
      },
    ],
  },

  {
    category: "Database & Infrastructure",
    skills: [
      {
        name: "MySQL",
        style:
          "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100 hover:border-amber-300",
      },
    ],
  },

  {
    category: "Tools & Workflow",
    skills: [
      {
        name: "Git",
        style:
          "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300",
      },
      {
        name: "GitHub",
        style:
          "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300",
      },
      {
        name: "GitLab",
        style:
          "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300",
      },
      {
        name: "Postman",
        style:
          "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300",
      },
      {
        name: "Figma",
        style:
          "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300",
      },
    ],
  },
];
</script>

<template>
  <section
    id="skills"
    class="bg-white border-y border-slate-100 py-20 overflow-hidden"
  >
    <div class="max-w-5xl mx-auto px-6">
      <div data-aos="fade-up">
        <h2
          data-aos="fade-up"
          class="text-2xl md:text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4 group"
        >
          <span class="text-indigo-600 font-mono text-xl">03.</span>
          Technology Expertise
          <div
            class="hidden sm:block h-px bg-gradient-to-r from-slate-200 to-transparent flex-1 ml-2 group-hover:from-indigo-200 transition-all duration-500"
          ></div>
        </h2>
        <p class="text-slate-500 text-sm md:text-base mb-12 leading-relaxed">
          Berikut adalah beberapa teknologi, bahasa pemrograman, dan framework
          yang biasa saya gunakan untuk membangun produk digital berskala
          produksi.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 group/grid">
        <div
          v-for="(group, groupIdx) in skillGroups"
          :key="groupIdx"
          data-aos="zoom-in-up"
          :data-aos-delay="groupIdx * 150"
          class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
        >
          <h3
            class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5"
          >
            {{ group.category }}
          </h3>
          <div class="flex flex-wrap gap-2.5">
            <span
              v-for="(skill, skillIdx) in group.skills"
              :key="skill.name"
              class="px-3 py-1.5 text-xs font-semibold rounded-lg border font-mono transition-all duration-200 hover:scale-105 active:scale-95 cursor-default shadow-sm select-none"
              :class="skill.style"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
