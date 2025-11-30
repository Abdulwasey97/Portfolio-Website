<template>
  <section id="who-we-are" class="who-are-we-section">
   <div class="container py-5">
  <div class="row align-items-center">
    
    <!-- Left Side - Image -->
    <div class="col-lg-6 mb-4 mb-lg-0">
      <div class="about-image-wrapper">
        <img
          src="https://images.stockcake.com/public/6/7/4/67491e9f-6ec3-4f45-be64-6580c63756d4_large/busy-office-space-stockcake.jpg"
          alt="About Prime Cloud"
          class="about-image"
        />
      </div>
    </div>

    <!-- Right Side - Content -->
    <div class="col-lg-6">
      <p class="section-subtitle">Get To Know Us</p>
      <h2 class="section-title mb-3">WHO WE ARE</h2>

      <p class="description-text">
        At <strong>Prime Cloud Technologies</strong>, we are a forward-thinking
        technology firm committed to transforming businesses with innovative
        digital solutions. Our team specializes in AI automation, custom software,
        and web solutions that help businesses grow, streamline operations, and
        stay competitive in the digital era.
      </p>
      <div class="quote-box">
  <span class="quote-line"></span>
  <p class="quote-text">
    Empowering businesses with AI automation, custom software,
    and web solutions to boost innovation and efficiency.
  </p>
</div>


     <router-link
  to="/about-us"
  class="read-more-btn"
  :class="{ animating: isAnimating }"
  @click="handleReadMoreClick"
>
  Read More
  <span class="arrow">→</span>
</router-link>

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

.about-image-wrapper {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.about-image-wrapper img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

.about-image{
  width:90%;
  height:auto;
  border-radius:10px;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 26px;
  background-color: #214246;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  background-color: #214246;
  transform: translateY(-2px);
}

.read-more-btn .arrow {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.read-more-btn:hover .arrow {
  transform: translateX(6px);
}

.quote-box {
  position: relative;
  padding-left: 30px;
  margin-top: 25px;
  margin-bottom:20px;
}

.quote-line {
  position: absolute;
  left: 0;
  top: 5px;
 
  width: 4px;
  height: 100%;
  background-color: #214246; /* brand color */
  border-radius: 2px;
}

.quote-text {
  font-size: 17px;
  line-height: 1.8;
  font-style: italic;
  color: #555;
  margin: 0;
}


</style>
