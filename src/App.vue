<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Header />
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
    <Footer />
  </div>
</template>

<style scoped>
#app {
  scroll-behavior: smooth;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
