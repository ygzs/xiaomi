<template>
 <div class="main">
    <div class="picturewindows">
      <div class="picture" ref="picture" :style="containerStyle">
          <img :src="source[4]" alt="">
          <img v-for='(src,index) in source' :src='src' :key='index'>
          <img :src="source[0]" alt="">
      </div>
      <div class="allbuttons">
        <button class="previous" @click="move(1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </button>
        <button class="next" @click="move(-1)">
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
      current:1,
      distance:-1225,
      transitionEnd: true,
      speed:25,
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
  computed:{
    containerStyle(){
      return {transform:`translate3d(${this.distance}px, 0, 0)`}
    }
  },
   mounted() {
    this.init()
  },
   methods:{
    init() {
      this.play()
      window.onblur = function() { this.stop() }.bind(this)
      window.onfocus = function() { this.play() }.bind(this)
    },
    move(direction) {
      if (!this.transitionEnd) return
       
      this.transitionEnd = false
        
      //direction === -1 ? this.current += 1 : this.current -= 1
      //if (this.current > 5) this.current = 1
      //if (this.current < 1) this.current = 5

      let destination = this.distance + 1225 * direction
      this.animate(destination, direction)
    },
    animate(des, direc) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null ;
      }
      this.temp = setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += this.speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          if (des < -6125) this.distance = -1225
          if (des > -1225) this.distance = -6125
        }
      }, 50)
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(-1)
      }, 4000)
    },
    stop() {
      window.clearInterval(this.timer)
      this.timer = null
    }
   }
}
</script>
