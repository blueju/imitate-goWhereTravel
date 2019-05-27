<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      console.log(document.documentElement.scrollTop);
      const top = document.documentElement.scrollTop;
      if (top > 50) {
        let opacity = top / 130;
        // 如果算的结果大于1则等于1，如果不大于1则等于正常结果
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  // 页面展示&变化的时候，会激活该生命周期函数
  activated() {
    //   绑定一个事件
    console.log("activated")
    window.addEventListener("scroll", this.handleScroll);
  }
  // 页面消失/被替换的时候，会激活该生命周期函数
  // deactivated(){
    // 解绑
    // window.removeEventListener("scroll", this.handleScroll)
  // }
};
</script>
<style lang="stylus" scoped>
// 样式里面引用样式，前面要加@。
// 使用build/webpack.base.conf.js里定义的路径，路径前面要加~
@import '~styles/varibles.styl';

.header-abs {
    // 绝对定位 距离上面和左边都10px
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    // 正方形 宽高40px
    width: 0.8rem;
    height: 0.8rem;
    // 边框弧度 50%=20px
    border-radius: 0.4rem;
    // 背景色
    background-color: rgba(0, 0, 0, 0.8);
    // 行高
    line-height: 0.8rem;

    .header-abs-icon {
        // 图标颜色
        color: #fff;
        text-align: center;
        line-height: 0.8rem;
        font-size: 0.4rem;
    }
}

.header-fixed {
    // 相对定位
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    // 高度
    height: $headerHeight;
    // 行高
    line-height: $headerHeight;
    // 文本居中
    text-align: center;
    // 字体颜色
    color: #fff;
    // 背景颜色
    background: $bgColor;

    .header-fixed-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 0.64rem;
        text-align: center;
        font-size: 0.4rem;
        color: #fff;
    }
}
</style>


