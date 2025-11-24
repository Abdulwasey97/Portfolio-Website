<template>
  <section class="tech-banner">
    <div class="container">
      <div class="tech-banner-content">
        <div class="tech-banner-left">
          <p class="tech-banner-text">
            Our expertise spans the following technologies.
          </p>
        </div>
        <div class="tech-banner-right">
          <div class="tech-logos-wrapper">
            <div class="tech-logos">
              <!-- Logos duplicated for seamless infinite loop -->
              <div class="logo-item" v-for="(logo, index) in [...techLogos, ...techLogos, ...techLogos]" :key="index">
                <img :src="logo.src" :alt="logo.name" class="tech-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const techLogos = ref([
  {
    name: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'PHP',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  {
    name: 'Laravel',
    src: 'https://cdn.simpleicons.org/laravel/FF2D20'
  },
  {
    name: '.NET',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
  },
  {
    name: 'Vue.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Next.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'MySQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  }
])
</script>

<style scoped>
.tech-banner {
  background: #f5f5f5;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
}

.tech-banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
}

/* Left side - Text */
.tech-banner-left {
  flex: 0 0 400px;
  z-index: 2;
  background: #f5f5f5;
  padding-right: 2rem;
  position: relative;
}

.tech-banner-text {
  color: #6b6b6b;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
}

/* Right side - Scrolling logos */
.tech-banner-right {
  flex: 1;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 50px,
    black 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 50px,
    black 100%
  );
}

.tech-logos-wrapper {
  width: 100%;
  overflow: hidden;
}

.tech-logos {
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: scroll 40s linear infinite;
  width: fit-content;
}

.tech-logos:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.33%);
  }
}

.logo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.logo-item:hover {
  transform: scale(1.05);
}

.tech-logo {
  height: 50px;
  width: auto;
  max-width: 100px;
  opacity: 1;
  filter: none;
  transition: transform 0.3s ease, filter 0.3s ease;
  object-fit: contain;
}

.logo-item:hover .tech-logo {
  transform: scale(1.1);
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15));
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .tech-banner {
    padding: 1.75rem 0;
  }

  .tech-banner-left {
    flex: 0 0 350px;
    padding-right: 1.5rem;
  }

  .tech-banner-text {
    font-size: 0.85rem;
  }

  .tech-logos {
    gap: 3rem;
  }

  .tech-logo {
    height: 45px;
    max-width: 90px;
  }
}

@media (max-width: 768px) {
  .tech-banner {
    padding: 1.5rem 0;
  }

  .tech-banner-content {
    flex-direction: column;
    gap: 2rem;
  }

  .tech-banner-left {
    flex: 1;
    width: 100%;
    padding-right: 0;
    text-align: center;
  }

  .tech-banner-text {
    font-size: 0.85rem;
  }

  .tech-banner-right {
    width: 100%;
    mask-image: linear-gradient(
      to right,
      transparent,
      black 30px,
      black calc(100% - 30px),
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 30px,
      black calc(100% - 30px),
      transparent
    );
  }

  .tech-logos {
    gap: 2.5rem;
  }

  .tech-logo {
    height: 40px;
    max-width: 80px;
  }
}

@media (max-width: 576px) {
  .tech-banner {
    padding: 1.25rem 0;
  }

  .tech-banner-text {
    font-size: 0.8rem;
  }

  .tech-logos {
    gap: 2rem;
  }

  .tech-logo {
    height: 35px;
    max-width: 70px;
  }
}
</style>

