import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/episodios',
    name: 'episodios',
    component: () =>  import('../views/Episodios.vue'),
  },
  {
    path: '/pagina',
    name: 'pagina',
    component: () =>  import('../views/Pagina.vue'),
  },
  {
    path: '/locations',
    name: 'locations',
    component: () =>  import('../views/Locations.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
