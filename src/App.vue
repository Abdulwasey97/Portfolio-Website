<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Header />
    
    <main class="flex-grow-1 main-content">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    
    <Footer />
  </div>
</template>

<style scoped>
#app {
  scroll-behavior: smooth;
}

.main-content {
  margin-top: 0;
  position: relative;
}
</style>
