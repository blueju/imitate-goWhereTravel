<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  // 给该组件取个名字,记得加引号""
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        // 自动播放/滚动：禁止（不过发现，不设置默认也是不滚动，只要data里有swiperOption就行，如果没有，轮播就会自动滚动）
        // autoplay: false
      }
      // iconList: [
      //   {
      //     id: "0001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
      //     desc: "景点门票"
      //   }
      // ]
    };
  },
  computed: {
    pages() {
      //   定义数组，装载页数page和具体项item
      const pages = [];
      //   使用遍历数组的函数方法forEach()遍历iconList，其中将iconList的item和index也传进去
      //   注意：item要放前面
      this.iconList.forEach((item, index) => {
        //   新定义一个变量存储，因为一个页面只能装8个图标，所以除以8，具体计算自己算一下，很容易明白的
        const page = Math.floor(index / 8);
        // 例如，如果pages[0]不存在，就新创建一个子数组，将此次循环中的item添加到该子数组中；如果存在，就直接将此次循环中的item添加到该子数组中。
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      //   要返回，必须，不然接收不到
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

// 样式穿透，通常用于修改插件里默认的样式
.icons>>>.swiper-container {
  // 溢出隐藏
  overflow: hidden;
  // 高度为零
  height: 0;
  // 宽度100%
  // width: 100%;
  // padding-bottom相对于宽度进行取值
  padding-bottom: 50%;
}

.icons {
  // 上外边距
  margin-top: 0.1rem;

  .icon {
    // 相对定位（服务于icon-img的绝对定位）
    position: relative;
    // 溢出隐藏
    overflow: hidden;
    // 浮动
    float: left;
    // 宽度(宽度也是相对于父级的，父级宽度为100%，这里为25%，相当于宽度一分为四，放置四列图标)
    width: 25%;
    // 高度为零(因为父级元素高度为零，它作为子级元素是相对于父级的，因此直接用height是不行的，但是又需要高度怎么办，就需要继续参照父级元素设置padding-bottom，此处为方便统一管理，因此将height设为零)
    height: 0;
    // 父级元素高度为50%，此处为25%，相当于高度一分为二，放置两行图标
    padding-bottom: 25%;

    // 图标本标
    .icon-img {
      // 绝对定位（相对于上级的相对定位）
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      // height : 100%;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        // 块级显示
        display: block;
        // 针对块级元素进行居中显示
        margin: 0 auto;
        // 高度100%
        height: 100%;
      }
    }

    // 图标下面的文本提示
    .icon-desc {
      // 绝对定位（相对于上级的相对定位）
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      // 上面的图标给留了0.44rem的高度，然后也把行高设成这么大
      height: 0.44rem;
      line-height: 0.44rem;
      // 文本居中
      text-align: center;
      // 颜色
      color: $darkTextColor;
      // 使用封装好的函数方法，对溢出的文本进行统一省略号处理
      ellipsis();
    }
  }
}
</style>


