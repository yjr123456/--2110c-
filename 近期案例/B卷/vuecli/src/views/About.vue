<template>
  <div class="about">
    <p class="tu">
      图书商城<span class="s1" @click="tu()">我的书架</span>
    </p>
    <input type="text" class="ipt" v-model="sou" @keyup.enter="ss()">
    <ul>
      <li v-for="item,index in list" :key="index">
        <img class="img" :src="item.img" alt="">
        <p class="ner">{{item.desc}}</p>
        <p class="wen"><span class="s2">{{item.name}}</span><span class="s3" @click="add(item.name)">+</span></p>
      </li>
    </ul>
  </div>
</template>
<script>

import data1 from '../../public/data副本.json'
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
      list:data1,
      sou:''
    }
  },
  computed:{
    ...mapState(['tslist'])
  },
  created() {
  },
  methods: {
    ...mapMutations(['addsj']),
    //搜索
    ss(){
      this.list = data1
      var arr = this.list.filter(item=>{
        return item.name.includes(this.sou)
      })
      this.list = arr
      if(this.sou==''){
        this.list = data1
      }
    },
    //添加
    add(name){
      var index = this.tslist.findIndex(item=>{
        return item.name==name
      })
      if(index==-1){
        var obj = {name:name,static:0}
        this.addsj(obj)
      }
    },
    //跳转
    tu(){
      this.$router.push('/Tu')
    }
  },
}
</script>
<style>
.tu{
  background-color: red;
  font-size: 28px;
  font-weight: 700;
  line-height: 80px;
  color: white;
  margin: 0px;
  text-align: center;
  position: relative;
  /* margin-bottom: 50px;  */
}
.s1 {
  font-size: 14px;
  position: absolute;
  color: blue;
  right: 5px;
  z-index: 999;
}
.ipt{
  width: 100%;
  background-color: #ccc;
  height: 40px;
}
ul{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.img{
  width: 150px;
  height: 200px;
}
.ner{
  color: #999;
  white-space: nowrap;
  width: 150px;
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  padding-left: 20px;
}
.s2{
  color: red;
  font-size: 16px;
}
.wen{
  position: relative;
  padding: 0 10px;
  text-align: left;
}
.s3{
  display: inline-block;
  background-color: red;
  color: white;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  right: 5px;
  top:5px
}
li{
  width: 50%;
  /* height: 300px; */
  text-align: center;
  /* padding: 0 180px; */
  box-sizing: border-box;
  /* margin: 0px 10px; */
}
</style>

