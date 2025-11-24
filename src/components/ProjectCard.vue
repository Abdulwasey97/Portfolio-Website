<template>
  <div class="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition">
    <h3 class="text-xl font-semibold mb-2 text-blue-600">{{ project.title }}</h3>
    <p class="text-gray-700 mb-4">{{ project.description }}</p>
    <a
      :href="project.link"
      target="_blank"
      class="text-blue-600 hover:underline"
    >
      View Project →
    </a>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>
