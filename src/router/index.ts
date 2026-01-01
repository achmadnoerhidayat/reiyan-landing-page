// import { createRouter, createWebHistory } from 'vue-router'
import landingRouter from './landing.router'
const routes = [
  ...landingRouter
];
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     return savedPosition || { top: 0 }
//   }
// })

export default routes
