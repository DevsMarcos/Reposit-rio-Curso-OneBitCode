import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from './Views/Home.vue'
import SearchVue from './Views/Search.vue'

const routes = [
  { path: '/', component: HomeVue },
  { path: '/search', component: SearchVue }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router