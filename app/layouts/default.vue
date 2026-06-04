<template>
  <div
    class="bg-slate-50 text-slate-900 min-h-screen font-sans antialiased selection:bg-indigo-500 selection:text-white"
  >
    <Navbar />
    <main>
      <slot />
    </main>
    <footer
      class="bg-white border-t border-slate-200 py-6 text-center text-sm text-slate-500"
    >
      <p>© {{ new Date().getFullYear() }} John Doe. All rights reserved.</p>
    </footer>
  </div>
</template>
