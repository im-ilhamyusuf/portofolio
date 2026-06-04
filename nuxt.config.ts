// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  app: {
    head: {
      title: "Ilham Yusuf | Professional Software Engineer",
      meta: [
        {
          name: "description",
          content:
            "Portfolio of Ilham Yusuf, a passionate Software Engineer specializing in Full-Stack Development.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
