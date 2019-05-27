<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- 每项周末去哪儿 -->
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <!-- 每项周末去哪儿 上边的图的封皮/容器，用于撑开图所需要的空间，防止因网速加载慢而带来的页面抖动问题 -->
        <div class="item-img-wrapper">
          <!-- 图片本图 -->
          <img class="item-img" :src="item.imgUrl">
        </div>
        <!-- 每项周末去哪儿 下边的标题、介绍 -->
        <div class="item-info">
          <!-- 标题 -->
          <p class="item-title">{{item.title}}</p>
          <!-- 介绍 -->
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  },
  data() {
    return {
      // weekendList: [
      //   {
      //     id: "0001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
      //     title: "北京温泉排行榜",
      //     desc: "细数北京温泉，温暖你的冬天"
      //   }
      // ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.title {
  // 行高
  line-height: 0.8rem;
  // 背景颜色
  background: #eee;
  // 文本缩进
  text-indent: 0.2rem;
}

.item {
  // 每项周末去哪儿 上边的图的封皮/容器，用于撑开图所需要的空间，防止因网速加载慢而带来的页面抖动问题
  .item-img-wrapper {
    // 溢出隐藏
    overflow: hidden;
    // 高度
    height: 0;
    // 宽度
    width: 100%;
    // 根据图表所需的空间的宽高比例算得
    padding-bottom: 38%;

    .item-img {
      width: 100%;
    }
  }

  .item-info {
    padding: 0.1rem;

    // 上下左右内边距
    // padding: 0.1rem;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
    }
  }
}
</style>


