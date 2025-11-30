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
import { computed } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ProjectCard from '../components/ProjectCard.vue';
import projectsData from '../data/projects.json';

// Map projects from JSON to ProjectCard format
const projects = computed(() => {
  return projectsData.projects.map(project => ({
    title: project.title,
    description: project.description,
    link: project.demo || project.code || '#'
  }));
});
</script>
