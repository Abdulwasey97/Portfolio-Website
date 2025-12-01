<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import Hero from '../components/Hero.vue'
import TechBanner from '../components/TechBanner.vue'
import WhoAreWe from '../components/WhoAreWe.vue'
import ServicesSection from '../components/ServicesSection.vue'
import Projects from '../components/Projects.vue'
import CaseStudies from '../components/CaseStudies.vue'
import ClientSuccessStories from '../components/ClientSuccessStories.vue'
import Contact from '../components/Contact.vue'

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.18,
    }
  )

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <main class="flex-grow-1 main-content">
     <section class="section-wrapper">
    <Hero />
     </section>

    <section class="section-wrapper scroll-animate from-right">
    <TechBanner />
    </section>

    <section class="section-wrapper scroll-animate from-left">
    <WhoAreWe />
    </section>

    <section class="section-wrapper scroll-animate from-right">
    <ServicesSection />
    </section>

    <section class="section-wrapper scroll-animate from-left">
    <Projects />
    </section>

    <section class="section-wrapper scroll-animate from-right">
    <CaseStudies />
    </section>

    <section class="section-wrapper scroll-animate from-left">
    <ClientSuccessStories />
    </section>

    <section class="section-wrapper scroll-animate from-right">
    <Contact />
    </section>
  </main>
</template>

<style scoped>
.main-content {
  margin-top: 0;
  position: relative;
  overflow-x: hidden;
}

.section-wrapper {
  width: 100%;
}

.scroll-animate {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
  will-change: opacity, transform;
}

.scroll-animate.from-left {
  transform: translateX(-48px);
}

.scroll-animate.from-right {
  transform: translateX(48px);
}

.scroll-animate.in-view {
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>

