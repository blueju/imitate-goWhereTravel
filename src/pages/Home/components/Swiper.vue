<template>
    <div class="wrapper">
        <!-- 不设置v-if会因为空数组渲染该轮播图，而导致打开默认不在第一页 -->
        <swiper :options="swiperOption" v-if="shwoSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- 专门显示页码小圆圈的div -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 左右切换箭头（不要） -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- 底部的滚动条 -->
            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>
<script>
export default {
  // 给这个组件取个名字
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  computed: {
    shwoSwiper() {
      return this.swiperList.length;
    }
  },
  data() {
    return {
      // {}空对象
      swiperOption: {
        pagination: ".swiper-pagination",
        // 支持循环轮播
        loop: true
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
// 样式穿透
.wrapper >>> .swiper-pagination-bullet-active {
    background: #fff;
}

.wrapper {
    // 第一种写法，不过有兼容性问题
    // width 100%
    // height 31.25vw

    // 第二种写法
    width: 100%;
    height: 0;
    // padding-bottom相对于宽度进行取值
    padding-bottom: 31.25%;
    // 背景色
    background: #eee;

    .swiper-img {
        width: 100%;
    }
}
</style>

