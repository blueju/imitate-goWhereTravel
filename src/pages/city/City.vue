<template>
  <div>
    <!-- 头部 -->
    <city-header></city-header>
    <!-- 搜索框 -->
    <city-search :cities=cities class=""></city-search>
    <!-- :hotcities=hotCities 向子组件传递热门城市的数据 -->
    <!-- :cities=cities 向子组件传递所有城市的数据 -->
    <city-list :hotcities=hotCities :cities=cities :letter="letter"></city-list>
    <!-- 传递靠右边城市列的数据 -->
    <!-- 子组件向外发送事件后，这里对发送的事件进行监听，@事件名="可自定义名字" -->
    <city-alphabet :cities=cities @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
// 引入CityHeader组件
import CityHeader from "./components/Header";
// 引入CitySearch组件
import CitySearch from "./components/Search";
// 引入CityList组件
import CityList from "./components/List";
// 引入Alphabet组件
import CityAlphabet from "./components/Alphabet";

// 引入第三方插件axios
import axios from "axios";

export default {
  name: "City",
  components: {
    //   个人更喜欢这种写法，直接写CityHeader、CitySearch...也行，Vue在HTML中会将此处的驼峰命名转换成短横线命名
    "city-header": CityHeader,
    "city-search": CitySearch,
    "city-list": CityList,
    "city-alphabet": CityAlphabet
  },
  data() {
    return {
      // 热门城市，先定义为空数组，后续赋值
      hotCities: [],
      // 所有城市，先定义为空对象，后续赋值
      cities: {},
      letter: ""
    };
  },
  methods: {
    handleLetterChange(letter) {
      this.letter = letter;
    },
    // 获取城市列表信息
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityInfoSuccess);
    },
    // 成功后信息
    handleGetCityInfoSuccess(res) {
      const result = res.data;
      // 加个判断,结果是否为true，是否有数据
      if (result.ret && result.data) {
        //获取热门城市
        this.hotCities = result.data.hotCities;
        // 获取所有城市
        this.cities = result.data.cities;
      }
    },
    handleGetCityInfoFail() {
      console.log("失败");
    }
  },
  mounted() {
    // 生命周期函数，加载完成后自动运行getCityInfo()
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped>
</style>


