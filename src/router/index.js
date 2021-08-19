import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import GamePage from '../views/GamePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/GamePage',
    name: 'GamePage',
    component: GamePage,
    // meta : { requiresAuth : true }
  }
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to, from, next) => {
//   if(to.meta.requiresAuth){
//     need to login
//   } else {
//     next()
//   }
// })
export default router
