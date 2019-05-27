<template>
  <div>
    <div class="banner" @click="handleBannerClick()">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-info-title">{{this.sightName}}</div>
        <div class="banner-info-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <!-- 点击后放大查看的画廊 -->
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="this.showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
// 引入画廊共用组件
import CommonGallary from "common/gallary/Gallary";

import FadeAnimation from "common/fade/FadeAnimation";

// 引入第三方插件axios
import axios from "axios";

export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false
    };
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  // 相对定位
  position: relative;
  // 溢出隐藏
  overflow: hidden;
  // 高度
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    // 绝对定位
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    // flex布局
    display: flex;
    line-height: 0.6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-info-title {
      color: #fff;
      flex: 1;
      padding: 0 0.2rem;
      line-height: 0.6rem;
    }

    .banner-info-number {
      color: #fff;
      line-height: 0.6rem;
      padding: 0 0.2rem;

      .banner-icon {
        padding: 0 0.1rem;
        line-height: 0.6rem;
      }
    }
  }
}
</style>
