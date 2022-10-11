<template>
  <div class="w-full max-w-screen-xl mx-auto lg:px-4 lg:py-6">
    <nav
      class="px-1.5 lg:px-4 py-3 flex items-end justify-between bg-white dark:bg-slate-700 lg:rounded shadow"
    >
      <div>
        <NuxtLink
          to="/"
          class="px-3 py-1 rounded-lg font-bold text-2xl text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-600 transition duration-150"
          >Конспект</NuxtLink
        >
      </div>
      <div>
        <ul class="flex items-center gap-1">
          <li>
            <UiMode class="mr-4 mt-1" />
          </li>
          <li>
            <NuxtLink
              to="/blog"
              class="px-4 py-2 rounded-lg font-semibold text-lg text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-600 transition duration-150"
              >Blog</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/drafts"
              class="px-4 py-2 rounded-lg font-semibold text-lg text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-600 transition duration-150"
              >Drafts</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
