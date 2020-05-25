<template>
  <div class="about">
    <h1>This is an test page</h1>
    <div class="introduction">
      <img :src="src">
      <div class="option">
        <h1>{{data}}</h1>
        <button @click="addcart">添加到购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/about.css"
export default {
  data(){
    return {
      src:['https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg'],
      data:''
    }
  },
  mounted(){
    this.data = this.$route.params.id
  },
  methods:{
    addcart(){
      this.$store.commit('addcart')
    }
  }
}
</script>