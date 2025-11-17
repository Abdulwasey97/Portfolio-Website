<script setup>
import Hero from '../components/Hero.vue'
import TechBanner from '../components/TechBanner.vue'
import WhoAreWe from '../components/WhoAreWe.vue'
import ServicesSection from '../components/ServicesSection.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
  <main class="flex-grow-1 main-content">
    <Hero />
    <TechBanner />
    <WhoAreWe />
    <ServicesSection />
    <Projects />
    <Contact />
  </main>
</template>

<style scoped>
.main-content {
  margin-top: 0;
  position: relative;
}
</style>

