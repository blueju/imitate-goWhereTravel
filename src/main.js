// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*  CSS类  */
//引入reset.css，CSS初始化
import 'styles/reset.css'
//引入border.css，解决边框1像素问题
import 'styles/border.css'
// 引入图标
import 'styles/iconfont.css'


/*  插件类  */
//  引入fastClick插件，解决移动端点击300毫秒延迟问题，后面那句不是很清楚，反正是使用fastClick,类似vue.use()
import fastClick from 'fastclick'
fastClick.attach(document.body)
// 引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// 引入Vuex
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 路由
  router,
  // vuex
  store,
  components: {
    App
  },
  template: '<App/>'
})
