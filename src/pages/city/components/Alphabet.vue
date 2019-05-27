<template>
  <ul class="list">
    <li class="item" v-for="(item,key) in cities" :key="key" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="key">
      {{key}}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      // 先定义一个空数组
      const letters = [];
      //   这里不是很清楚什么意思，貌似遍历cities,但是只遍历一层，cities第一层是ABCD...,所以最后将ABCD提取出来了
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  mounted() {
    // console.log(this.cities);
  },
  methods: {
    handleLetterClick(e) {
      // 向外层组件发送事件，事件名：change，事件携带的内容：e.target.innerText
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
      console.log(this.cities);
      // console.log(this.letters);
    },
    handleTouchMove(e) {
      /* //这是未经优化的代码
       if (this.touchStatus) {
        // 首英文字母距离页面顶部的距离，不能直接获取cities，因为他们还没有付诸使用，所以是没有距离顶部高度的
        // console.log(this.$refs['A']);
        // console.log(this.$refs["A"][0].offsetTop);
        const startY = this.$refs["A"][0].offsetTop;

        //获取触摸的地方距离顶部的距离
        // console.log(e);
        // console.log(e.targetTouches[0]);
        // console.log(e.targetTouches[0].clientY);
        const touchY = e.targetTouches[0].clientY - 74;
        // ↓ 老师的代码是下面这样的，↑ 上面的是我自己一步步找属性打的，可能有点不同，不过效果一样
        // const touchY = e.touches[0].clientY - 79;

        // 差值
        const index = Math.floor((touchY - startY) / 17);

        // 传值传出去的要是A,B,C,D,E这样的，而不是index的值0123...这样的。但是cities对象结构又比较复杂，因此可以利用计算属性computed先将我们所需要的A,B,C,D,E...提取出来
        console.log(index);
        this.$emit("change", this.letters[index]);
        // console.log(e);
      } */
      if (this.touchStatus) {
        // 如果touchStatus为true,才执行下面的
        // 不打注释了，参照上面的
        // console.log(this.$refs['A'][0].offsetTop)
        /**
         * startY 这个是固定，如果下面这样设置，那么每次触摸移动时后悔计算，性能较低，我们可以将其移到生命周期update中，当页面重新update的时候才计算，否则一直沿用第一次update计算的值
         */
        // const startY = this.$refs["A"][0].offsetTop;
        // console.log(e.touches[0].clientY);
        /**
         * 函数节流，通过设置setTimeOut
         */
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 74;
          const index = Math.floor((touchY - this.startY) / 17);
          // console.log(index);
          // console.log(this.letters);
          // console.log(this.letters[index]);
          this.$emit("change", this.letters[index]);
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
    // console.log(this.cities);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  // 绝对定位（靠右）
  position: absolute;
  top: 1.68rem;
  right: 0;
  bottom: 0;
  // 宽度
  width: 0.4rem;
  // 不是很懂，真的要好好查查CSS了
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    // 文本居中
    text-align: center;
    // 行高
    line-height: 0.34rem;
    // 字体颜色
    color: $bgColor;
  }
}
</style>


