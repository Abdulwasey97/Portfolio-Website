<template>
  <section id="who-we-are" class="who-are-we-section">
    <div class="container">
      <div class="row">
        <!-- Left side - Title -->
        <div class="col-lg-5 mb-4 mb-lg-0">
          <p class="section-subtitle">WHO ARE WE?</p>
          <h3 class="section-title">
            Empowering businesses with AI automation, custom software, <br>and web solutions to boost innovation and
            efficiency.<br>
          </h3>
        </div>

        <!-- Right side - Description -->
        <div class="col-lg-7">
          <div class="description-content">
            <p class="description-text">
              At <strong>CodeWorld360</strong>, we are a forward-thinking technology firm committed to transforming businesses
              with innovative digital solutions. Our team of skilled developers and designers specializes in crafting
              custom software, web applications, and mobile apps that drive growth and operational efficiency. We
              combine creativity with technical expertise to deliver excellence in every project, helping our clients
              stay ahead in the digital era. From startups to established enterprises, we partner with businesses to
              bring their vision to life.
            </p>
            <router-link 
              to="/about-us" 
              class="read-more-link"
              :class="{ 'animating': isAnimating }"
              @click="handleReadMoreClick"
            >
              <span class="read-more-text">Read more</span>
              <span class="read-more-arrow-line" ref="arrowLineRef"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { PRIMARY_COLOR } from '../config/colors'

const router = useRouter()
const isAnimating = ref(false)
const arrowLineRef = ref(null)

const handleReadMoreClick = async (event) => {
  if (isAnimating.value) return
  
  event.preventDefault()
  isAnimating.value = true
  
  // Wait for DOM to update with animation class
  await nextTick()
  
  // Get the arrow line element to listen for animation end
  const arrowLine = event.currentTarget.querySelector('.read-more-arrow-line')
  
  if (arrowLine) {
    // Listen for animation end event
    const handleAnimationEnd = () => {
      arrowLine.removeEventListener('animationend', handleAnimationEnd)
      router.push('/about-us')
      // Reset animation state after navigation
      setTimeout(() => {
        isAnimating.value = false
      }, 100)
    }
    
    arrowLine.addEventListener('animationend', handleAnimationEnd)
  } else {
    // Fallback: wait for animation duration (0.4s) then navigate
    setTimeout(() => {
      router.push('/about-us')
      setTimeout(() => {
        isAnimating.value = false
      }, 100)
    }, 200)
  }
}
</script>

<style scoped>
.who-are-we-section {
  background: #ffffff;
  padding: 6rem 0;
  position: relative;
}

.section-subtitle {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #999999;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #2d2d2d;
  margin-bottom: 0;
  justify-content: left;
}



.description-content {
  background: transparent;
  padding-left: 2rem;
}

.description-text {
  color: #666666;
  font-size: 1rem;
  line-height: 1.8;
  /* margin-bottom: 2rem; */
  text-align: justify;
}

.description-text strong {
  color: #4f7c82;
  font-weight: 700;
}

.read-more-link {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  color: #4f7c82;
  gap: 0.15rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: visible;
}

.read-more-text {
  font-weight: 600;
  font-size: 1.05rem;
}

.read-more-arrow-line {
  position: relative;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #4f7c82;
  transition: all 0.3s ease;
  transform-origin: left center;
}

.read-more-link.animating .read-more-arrow-line {
  animation: stretchArrow 0.4s ease-out forwards;
}

@keyframes stretchArrow {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(3);
  }
}

.read-more-arrow-line::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  width: 0.6em;
  height: 0.6em;
  border-top: 2px solid #4f7c82;
  border-right: 2px solid #4f7c82;
  transform: translateY(-50%) rotate(45deg);
}

.read-more-link:hover {
  color: #3e6269;
}

.read-more-link:hover .read-more-arrow-line {
  background-color: #3e6269;
}

.read-more-link:hover .read-more-arrow-line::after {
  border-color: #3e6269;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .who-are-we-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .description-content {
    padding-left: 0;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .who-are-we-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .weather-icons {
    font-size: 2rem;
  }

  .description-text {
    font-size: 0.95rem;
    text-align: left;
  }

  .read-more-link {
    font-size: 0.95rem;
  }

  .read-more-text {
    font-size: 0.95rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.75rem;
  }

  .weather-icons {
    font-size: 1.5rem;
  }

  .description-text {
    font-size: 0.9rem;
  }
}
</style>
