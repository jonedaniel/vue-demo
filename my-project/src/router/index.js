import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyVueHello from '@/components/MyVueHello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'MyVueHello',
      component:MyVueHello
    },
    {
      path: '/otherHello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
