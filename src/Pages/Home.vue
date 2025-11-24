<template>
  <DefaultLayout>
    <section class="text-center py-24">
      <h1 class="text-5xl font-bold mb-4 text-blue-700">Hi, I’m Abdul Wasey 👋</h1>
      <p class="text-lg text-gray-600">Full Stack Developer | Laravel & Vue.js</p>
      <div class="mt-6">
        <RouterLink
          to="/projects"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { RouterLink } from 'vue-router';
</script>
