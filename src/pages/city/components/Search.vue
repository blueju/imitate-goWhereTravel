<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <!-- 搜索结果 -->
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="!list.length">查无此城市</li>
      </ul>
    </div>
  </div>

</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "",
      list: []
    };
  },
  methods: {
    handleCityClick(city) {
      this.$store.dispatch("changeCity", city);
      this.$router.push("/");
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search, { click: true });
  },
  props: {
    cities: Object
  },
  watch: {
    keyword() {
      const result = [];
      // console.log(this.keyword);
      for (let i in this.cities) {
        this.cities[i].forEach(value => {
          // 判断输入的字符和提取出来的地名和拼音符不符合
          if (
            value.spell.indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1
          ) {
            result.push(value);
          }
        });
        this.list = result;
      }
      // console.log(result);
    }
  }
};
</script>
<style lang="stylus" scoped>
// 样式里面引用样式，前面要加@。
// 使用build/webpack.base.conf.js里定义的路径，路径前面要加~
@import '~styles/varibles.styl';

.search {
  /*
  对于div元素，height指的是div的高度，padding和margin不会从里面分
  但是对于input元素，height指的是input的高度，但是它的padding和margin会从input高度里面分
  */
  height: 0.62rem;
  // 背景颜色
  background: $bgColor;
  // 内边距
  padding: 0.1rem;

  .search-input {
    // 输入框宽度
    width: 100%;
    // 输入框高度（默认貌似是0.62rem，即31px）
    height: 0.62rem;
    // 行高
    line-height: 0.62rem;
    // 输入框内的文本居中
    text-align: center;
    // 边框圆角CSS3属性
    border-radius: 0.06rem;
    // 输入框内的字体颜色
    color: #666;
    // 内边距，没有内边距会使得输入文本过长后，文本跟变量贴的很近的情况，想象一下
    padding: 0.1rem;
    // 这个还不是很懂
    box-sizing: border-box;
  }
}

.search-content {
  // 溢出隐藏
  // overflow: hidden;
  // 背景(测试)
  background: #eee;
  // 宽度
  width: 100%;
  // 高度
  height: 100%;
  // 绝对定位
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
  // 层叠次序
  z-index: 1;

  .search-item {
    // 左内边距
    padding-left: 0.2rem;
    // 行高
    line-height: 0.6rem;
    // 字体颜色
    color: #666;
    // 背景颜色
    background: #fff;
  }
}
</style>

