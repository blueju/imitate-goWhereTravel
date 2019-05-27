import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 第一
  actions: {
    // 方法（俩参数），一个是上下文（相当于序号），一个是入参
    changeCity(ctx, city) {
      ctx.commit('changeCity', city)
    }
  },

  // 第二
  mutations: {
    // 方法（俩参数），一个是 指向state ，一个是state中具体的数据项
    changeCity(state, city) {
      state.city = city
      localStorage.city = city
    }
  },

  // 第三
  // state存放全局共用的一些数据
  state: {
    city: localStorage.city || '深圳'
  }
})
