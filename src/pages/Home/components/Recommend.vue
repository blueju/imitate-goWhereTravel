<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <!-- 每项推荐 -->
            <router-link :to="'/detail/'+item.id" tag="li" class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <!-- 每项推荐左边的图的封皮/容器，用于撑开图所需要的空间，防止因网速加载慢而带来的页面抖动问题 -->
                <!-- <div class="item-img-wrapper"> -->
                <!-- 图片本图 -->
                <img class="item-img" :src="item.imgUrl">
                <!-- </div> -->
                <!-- 每项推荐右边的标题、介绍和查看详情按钮 -->
                <div class="item-info">
                    <!-- 标题 -->
                    <p class="item-title">{{item.title}}</p>
                    <!-- 介绍 -->
                    <p class="item-desc">{{item.desc}}</p>
                    <!-- 查看详情按钮 -->
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  },
  data() {
    return {
      //   recommendList: [
      //     {
      //       id: "0001",
      //       imgUrl:
      //         "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
      //       title: "大连圣亚海洋公园",
      //       desc: "浪漫大连首站，浪漫的海洋主题公园"
      //     }
      //   ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.title {
    // 上边距
    margin-top: 0.2rem;
    // 行高
    line-height: 0.8rem;
    // 背景颜色
    background: #eee;
    // 文本缩进
    text-indent: 0.2rem;
}

.item {
    // 溢出隐藏
    overflow: hidden;
    // flex布局
    display: flex;
    // 高度
    height: 1.9rem;

    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }

    .item-info {
        // flex布局
        flex: 1;
        // 上下左右内边距
        padding: 0.1rem;

        .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
        }

        .item-desc {
            line-height: 0.4rem;
            color: #ccc;
        }

        .item-button {
            line-height: 0.44rem;
            margin-top: 0.2rem;
            background: #ff9300;
            padding: 0.06rem;
            border-radius: 0.06rem;
            color: #fff;
        }
    }
}
</style>


