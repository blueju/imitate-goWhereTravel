<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
// 引入Banner组件
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";

// 引入axios
import axios from "axios";

export default {
  name: "Detail",
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  methods: {
    getDetailInfo() {
      axios.get("api/detail.json").then(this.getDetailInfoSuccess);
    },
    getDetailInfoSuccess(result) {
      // console.log(result);
      if (result.data.ret && result.data.data) {
        this.sightName = result.data.data.sightName;
        this.bannerImg = result.data.data.bannerImg;
        this.gallaryImgs = result.data.data.gallaryImgs;
        this.list = result.data.data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
