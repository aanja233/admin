import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/', //直接进入的主页面
    name: 'amain',
    component:() => import('@/views/amain.vue'),
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('@/views/home/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user')
      },
      {
        path: '/mall',
        name: 'mall',
        component: () => import('@/views/mall')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/page1')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/page2')
      }
    ]
  },
  
 
]

const router = new VueRouter({
  routes
})

//解决报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
