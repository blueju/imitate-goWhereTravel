<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">
                {{this.$store.state.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>
<style lang="stylus" scoped>
// 引入样式（变量）样式内引入样式要加@
@import '~styles/varibles';

.header {
    display: flex;
    // 高度
    height: $headerHeight;
    // 背景色
    background: $bgColor;
    // 字体颜色
    color: #fff;

    .header-left {
        width: 0.64rem;
        float: left;

        .back-icon {
            // 图标居中
            text-align: center;
            // 图标大小
            font-size: 0.4rem;
            // 行高(自己加的)
            line-height: 0.86rem;
        }
    }

    .header-input {
        flex: 1;
        // 背景色
        background: #fff;
        // 圆角
        border-radius: 0.1rem;
        // 高度
        height: 0.64rem;
        // 左边距
        margin-left: 0.2rem;
        // 上边距
        margin-top: 0.12rem;
        // 字体颜色
        color: #ccc;
        // 行高
        line-height: 0.64rem;
        // 左边距
        padding-left: 0.2rem;
    }

    .header-right {
        // 宽度
        min-width: 1.04rem;
        // 内边距
        padding: 0.05rem;
        // 文本居中
        text-align: center;
        // 浮动 靠右
        float: right;
        // 行高
        line-height: 0.75rem;
        // 高度
        height: 0.64rem;
        // 字体颜色
        color: #fff;

        .arrow-icon {
            font-size: 0.2rem;
        }
    }
}
</style>
