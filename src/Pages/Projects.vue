<template>
  <DefaultLayout>
    <section class="container mx-auto py-16 px-6">
      <h2 class="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ProjectCard from '../components/ProjectCard.vue';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with Vue 3 and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat app using Laravel + Vue + Socket.io.',
    link: '#',
  },
  {
    title: 'E-Commerce Store',
    description: 'Modern online store built with Laravel and Vue.',
    link: '#',
  },
];
</script>
