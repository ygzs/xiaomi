<template>
     <div class="show">
        <div class="first"> 
            <ul>
                <li v-for="(item,index) in first" :key="index">
                    <a href="#">
                        <img :src='item.img'>
                        <span>{{item.name}}</span>
                    </a>
                </li>
            </ul>
        </div>
        <div v-for="(item,index) in second" :key="index">
            <img :src="item" style="width: 316px; height: 170px;">
        </div>
    </div>
</template>

<script>
import "../assets/mainproduct.css"
export default {
    data(){
        return{
            first:[
            {name:'小米秒杀',img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48'},
            {name:'企业团购',img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48'},
            {name:'F码通道',img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48'},
            {name:'米粉卡',img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48'},
            {name:'以旧换新',img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48'},
            {name:'话费充值',img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48'},
            ],
            second:[
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340',
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50beb6e77e316ff0637d79ad1869572e.jpg?w=632&h=340',
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340'
            ]
        }
    },
}
</script>