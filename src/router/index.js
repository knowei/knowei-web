import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import("@/views/Home"),
    children:[
      {
        path: '/article/:id',
        name: 'article',
        component: ()=>import("@/views/article/index")
      },
      {
        path: '/video',
        name: 'video',
        component: ()=>import("@/views/video/index")
      },{
        path: '/archive',
        name: 'archive',
        component: ()=>import("@/views/archive/index")
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
