<template>
  <div id="app">
    <div class="SiteTopNavBar">
      <div class="TopNavBar">
        <ol>
          <li><a href="#">小米商城</a></li>
          <li><a href="#">MIUI</a></li>
          <li><a href="#">loT</a></li>
          <li><a href="#">云服务</a></li>
          <li><a href="#">金融</a></li>
          <li><a href="#">有品</a></li>
          <li><a href="#">小爱开放平台</a></li>
          <li><a href="#">企业团购</a></li>
          <li><a href="#">资质证照</a></li>
          <li><a href="#">协议规则</a></li>
          <li><a href="#">下载app</a></li>
          <li><a href="#">Select Location</a></li>
        </ol>
      </div>
      <div class="user">
        <ol>
          <li><a href="#">登录</a></li>
          <li><a href="#">注册</a></li>
          <li><a href="#">消息通知</a></li>
        </ol>
      </div>
      <div class="cart">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon8"></use>
        </svg>
        <a href="#">购物车({{ count }})</a>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/SiteTopNavBar.css";
export default {
  computed: {
    count() {
      return this.$store.state.cart;
    }
  }
};
</script>
