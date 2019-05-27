<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>

    </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
// 样式里面引用样式，前面要加@。
// 使用build/webpack.base.conf.js里定义的路径，路径前面要加~
@import '~styles/varibles.styl';

.header {
    // 相对定位
    position: relative;
    // 溢出隐藏
    overflow: hidden;
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

    .header-back {
        // 绝对定位
        position: absolute;
        // 绝对定位了,就要给定top、right、left、bottom
        top: 0;
        left: 0;
        // 宽度
        width: 0.64rem;
        // 图标居中
        text-align: center;
        // 图标大小
        font-size: 0.4rem;
        // 行高(自己加的)
        line-height: 0.86rem;
        // 箭头颜色
        color: #fff;
    }
}
</style>


