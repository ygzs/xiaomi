<template>
 <div class="main">
    <div class="picturewindows">
      <div class="picture" ref="picture">
         <img v-for='(src,index) in source' :src='src' :key='index'>
      </div>
      <div class="allbuttons">
        <button class="previous" @click="goto(-1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </button>
        <button class="next" @click="goto(1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="group">
      <ol class="clearfix">
        <li v-for='(item,index) in group' :key='index'>
          <span>{{item.name}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou"></use>
          </svg>
        </li>
      </ol>
    </div>
  </div>
</template>
  
<script>
import "../assets/homemain.css"
export default {
  data(){
    return {
      current:0,
      source:[
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb9b9aab043acd0735afafb88d112b19.jpg?w=2452&h=920',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de7f93ef8e5d76b8e250d6a4f6f9caff.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25025f1ebb643fcf7f35aae636aa630.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c409123c70dc6fa2250916cb1cf2a4b.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
      ],
      group:[
        {name:'手机 电话卡'},
        {name:'电视 盒子'},
        {name:'笔记本 显示器 平板'},
        {name:'出行 穿戴'},
        {name:'电源 配件'},
        {name:'健康 儿童'},
        {name:'耳机 音响'},
        {name:'生活 箱包'},
      ]
    }
  },
  methods: {
    goto(index) {
      index === -1 ? this.current-- : this.current++
      if (this.current > 4) {
        this.current = 0
      } else if (this.current < 0) {
        this.current = 4
      }
      let s = this.current * -1226
      this.$nextTick(() => {
        this.$refs.picture.style.transform = 'translateX(' + s + 'px)'
      })
    }
  }
}
</script>
