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
        <li v-for="(item,index) in products" :key="index"
        @click="jumpTo(item)">{{item}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
import "../assets/SecondNav.css";
export default {
  data(){
    return {
      products:[
      '小米手机','Redmi红米','电视','笔记本',
      '家电','路由器','智能硬件','服务','社区'
    ]
    }
  },
  methods: {
    mouseover() {
      this.$refs.logo.children[0].style.transform = `translateX(55px)`;
      this.$refs.logo.children[1].style.transform = `translateX(55px)`;
    },
    mouseleave() {
      this.$refs.logo.children[0].style.transform = `translateX(0px)`;
      this.$refs.logo.children[1].style.transform = `translateX(0px)`;
    },
    jumpTo(name){
      this.$router.push({ name: 'About', params: { id: name }})
    },
  }
};
</script>
