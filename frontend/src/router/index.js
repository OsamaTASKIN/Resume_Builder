import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ResumeBuilder from '../views/ResumeBuilder.vue'
import ContentCorrection from '../views/ContentCorrection.vue'
import Signup from '../views/Signup.vue';
import Login from '../views/login.vue';
import AuthPage from '../views/AuthPage.vue'
import Contact from '../views/Contact.vue'



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/builder', name: 'ResumeBuilder', component: ResumeBuilder },
  {
    path: '/correction',
    name: 'ContentCorrection',
    component: ContentCorrection
  },

  { path: '/signup', component: Signup },
  { path: '/auth', component: AuthPage },
  

  {
    path: '/contact', component:Contact}
]





const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
