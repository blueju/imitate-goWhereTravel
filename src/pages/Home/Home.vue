<template>
  <div>
    <!-- 首页头部 -->
    <home-header></home-header>
    <!-- 首页轮播 -->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <!-- 首页图标 -->
    <home-icons :iconList="iconList"></home-icons>
    <!-- 首页推荐 -->
    <home-recommend :recommendList="recommendList"></home-recommend>
    <!-- 首页周末去哪儿 -->
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
// 引入Header组件
import HomeHeader from "./components/Header";
// 引入Swiper组件
import HomeSwiper from "./components/Swiper";
// 引入Icons组件
import HomeIcons from "./components/Icons";
// 引入Recommend组件
import HomeRecommend from "./components/Recommend";
// 引入Weekend组件
import HomeWeekend from "./components/Weekend";

// 引入vuex
// import Vuex from "vuex";

// 引入第三方插件axios
import axios from "axios";

export default {
  name: "Home",
  components: {
    //   个人更喜欢这种写法，直接写HomeHeader、HomeSwiper也行，Vue在HTML中会将此处的驼峰命名转换成短横线命名
    "home-header": HomeHeader,
    "home-swiper": HomeSwiper,
    "home-icons": HomeIcons,
    "home-recommend": HomeRecommend,
    "home-weekend": HomeWeekend
  },
  data() {
    return {
      // 不需要cities了
      // city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ""
    };
  },
  methods: {
    getHomeInfo() {
      axios
        .get("/api/index.json?city=" + this.$store.state.city)
        .then(this.getHomeInfoSuccess);
    },
    getHomeInfoSuccess(result) {
      // 加个判断,结果是否为true，是否有数据
      if (result.data.ret && result.data.data) {
        // 获取城市
        this.city = result.data.data.city;
        // 获取轮播图
        this.swiperList = result.data.data.swiperList;
        // 获取图标
        this.iconList = result.data.data.iconList;
        // 获取推荐
        this.recommendList = result.data.data.recommendList;
        // 获取周末去哪儿
        this.weekendList = result.data.data.weekendList;
      }
      // ↓↓ 调试用，查看返回结果
      // console.log(result);
    }
  },
  mounted() {
    // console.log("mounted");
    this.lastCity = this.$store.state.city;
    this.getHomeInfo();
  },
  activated() {
    // console.log("activated");
    if (this.lastCity !== this.$store.state.city) {
      this.lastCity = this.$store.state.city;
      this.getHomeInfo();
    }
  }
};
</script>
<style>
</style>