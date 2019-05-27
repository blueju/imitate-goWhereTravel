<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <div class="button-list">
                    <div class="button-warpper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市 </div>
                <div class="button-list">
                    <div class="button-warpper" v-for="item in hotcities" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area" :id="key" v-for="(item,key) in cities" :key="key" :ref="key">
                <div class="title">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  methods: {
    handleCityClick(city) {
      console.log("city");
      this.$store.dispatch("changeCity", city);
      this.$router.push("/");
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper,{click:true});
  },
  data() {
    return {};
  },
  props: {
    hotcities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    //   监听letter
    letter() {
      if (this.letter) {
        // 因为是循环渲染，所以得到的$refs是对象Object，可以通过下面这行代码查看到
        // console.log(this.$refs);
        // 获取对象里的数据不能像数组一样[数字]获取，而是['']内放对象名，来获取该对象内的数据，如下行代码
        // console.log(this.$refs["A"][0].className);
        // 因此是这样的
        // console.log(this.$refs[this.letter][0]);
        //  scrollToElement()里面必须是DOM元素或者DOM选择器，因为被包括的class选择器是area,并不是唯一的，其他版块也有，所以这里使用DOM元素，而不是DOM选择器
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }

      /**
       * 下面这个是我自己写的，因为scrollToElement()里面必须是DOM元素或DOM选择器，因为上面用过了DOM包裹这种方式，所以想着怎么用另一种方式（DOM选择器）进行实现，以下是详情
       */
      //   if (this.letter) {
      //     //   调试用，方便查看，查看id是否获取正确
      //     console.log(this.$refs[this.letter][0].id);
      //     /**
      //      * 新定义一个element值，方便管理，缩短长度
      //      * 再者注意的是：id记得加#，class记得加.
      //      * 这里是我自己复制到一个新值element里去了，如果直接用的话，scrollToElement()是需要带上双引号/单引号的，例如这样：
      //      * this.scroll.scrollToElement('#id')
      //      * 才能正确的跳转到正确的地方
      //      */
      //     const element = "#" + this.$refs[this.letter][0].id;
      //     console.log(element);
      //     this.scroll.scrollToElement(element);
      //   }
    }
  }
};
</script>
<style lang="stylus" scoped>
// 样式里面引用样式，前面要加@。
// 使用build/webpack.base.conf.js里定义的路径，路径前面要加~
@import '~styles/varibles.styl';

// .border-topbottom {
// &:before {
// border-color: #ccc;
// }

// &:after {
// border-color: #ccc;
// }
// }

// .border-bottom {
// &:before {
// border-color: #ccc;
// }
// }
.list {
    overflow: hidden;
    position: absolute;
    top: 1.68rem;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
        // 行高
        line-height: 0.44rem;
        // 背景颜色
        background: #eee;
        // 文本颜色
        color: #666;
        // 左边距
        padding-left: 0.2rem;
    }

    .button-list {
        // 内边距
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;
        // padding: 0.1rem;
        // margin: 0 0.6rem 0 0;
        // 溢出隐藏（至于为什么删除后，高度就会不够，我也不是很清楚，可能是没定义高度的情况下，加overflow: hidden，会自动适配合适的高度吧）
        overflow: hidden;

        .button-warpper {
            // 浮动
            float: left;
            // 每个按钮包裹的宽度
            width: 33.3%;

            .button {
                // 边框
                border: 0.02rem solid #ccc;
                // 文字居中
                text-align: center;
                // 高度
                // height: 0.28rem;
                // 外边距
                margin: 0.1rem;
                // 内边距
                padding: 0.1rem;
                // 圆角
                border-radius: 0.1rem;
            }
        }
    }

    .item-list {
        .item {
            line-height: 0.76rem;
            padding-left: 0.2rem;
        }
    }
}
</style>

