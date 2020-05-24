<template>
  <div class="SecondNav clearfix">
    <div
      class="logo"
      ref="logo"
      style="float: left;"
      @mouseover="mouseover"
      @mouseleave="mouseleave"
    >
      <img src="https://s02.mifile.cn/assets/static/image/mi-logo.png" />
      <a href="http://192.168.0.105:8080">
        <img src="https://s02.mifile.cn/assets/static/image/mi-home.png" />
      </a>
    </div>
    <div class="product">
      <ol class="clearfix">
        <li>小米手机</li>
        <li>Redmi红米</li>
        <li>电视</li>
        <li>笔记本</li>
        <li>家电</li>
        <li>路由器</li>
        <li>智能硬件</li>
        <li>服务</li>
        <li>社区</li>
      </ol>
    </div>
  </div>
</template>

<script>
import "../assets/SecondNav.css";
export default {
  methods: {
    mouseover() {
      this.$refs.logo.children[0].style.transform = `translateX(55px)`;
      this.$refs.logo.children[1].style.transform = `translateX(55px)`;
    },
    mouseleave() {
      this.$refs.logo.children[0].style.transform = `translateX(0px)`;
      this.$refs.logo.children[1].style.transform = `translateX(0px)`;
    }
  }
};
</script>
