import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import CaseStudiesPage from '../views/CaseStudiesPage.vue'
import TermsAndConditions from '../views/TermsAndConditions.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    },
    {
      path: '/case-studies',
      name: 'case-studies',
      component: CaseStudiesPage
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditions
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80
          })
        }, 500)
      })
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router

