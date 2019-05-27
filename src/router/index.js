import Vue from 'vue'
import Router from 'vue-router'
// 引入路由组件Home
import Home from '@/pages/home/Home'
// 引入路由组件City
import City from '@/pages/city/City'
// 引入路由组件Detail
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页路由
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 城市页路由
    {
      path: '/city',
      name: 'City',
      component: City
    },
    // 详情路由
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
