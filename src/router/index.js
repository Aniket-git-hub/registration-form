import { createRouter, createWebHistory } from 'vue-router'
import Admission from '../views/Admission.vue'

const routes = [
  {
    path: '/',
    name: 'admission',
    component: Admission
  },
  {
    path: '/notice',
    name: 'Notification',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/notice.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
