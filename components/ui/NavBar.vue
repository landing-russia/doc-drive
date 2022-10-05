<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <nav
      class="px-4 py-3 flex items-center justify-between bg-white rounded-lg shadow-2xl"
    >
      <div>
        <NuxtLink
          to="/"
          class="px-3 py-1 rounded-lg font-bold text-2xl text-slate-800 hover:bg-slate-100 transition duration-150"
          >Конспект</NuxtLink
        >
      </div>
      <div>
        <ul class="flex items-center gap-3">
          <li>
            <NuxtLink
              to="/"
              class="px-3 py-1 rounded-lg font-semibold text-lg text-slate-800 hover:bg-slate-100 transition duration-150"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/blog"
              class="px-3 py-1 rounded-lg font-semibold text-lg text-slate-800 hover:bg-slate-100 transition duration-150"
              >Blog</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
