import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook("app:suspense:resolve", () => {
      AOS.init({
        duration: 800, // Durasi animasi dalam milidetik
        once: true, // Animasi hanya berjalan sekali saat di-scroll
        easing: "ease-out-cubic",
      });
    });
  }
});
