import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import("@/views/Home"),
    children:[
      {
        path: '/view',
        name: 'view',
        component: ()=>import("@/views/article/index")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  document.documentElement.srcollTop = 0;

  window.scrollTo(0, 0);
  next();
});

export default router
