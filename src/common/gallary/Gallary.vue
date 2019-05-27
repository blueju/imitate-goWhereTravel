<template>
  <div class="container" @click="handleGallaryClick()">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- 图片 -->
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <!-- 页码显示 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommoGallary",
  data() {
    return {
      // 这个相当于用来设置轮播图参数的一个对象
      swiperOption: {
        // 分页目标
        pagination: ".swiper-pagination",
        // 分页展示类型
        paginationType: "fraction",
        // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents: true,
        // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observer: true
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  },
  props: {
    imgs: {
      type: Array
      // default() {
      //   return [
      //     "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
      //     "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
      //   ];
      // }
    }
  }
};
</script>
<style lang="stylus" scoped >
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  // flex布局
  display: flex;
  // 纵向
  flex-direction: column;
  // 纵向上下居中
  justify-content: center;
  // 层级
  z-index: 99;
  // 定位
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // 背景色
  background-color: #000;
  overflow: hidden;

  .wrapper {
    // overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      width: 100%;
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>


