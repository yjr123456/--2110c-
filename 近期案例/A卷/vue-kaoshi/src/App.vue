<template>
  <div>
    <input type="text" placeholder="商品名称" v-model="value" @keyup.enter="sou()">
      <table border="1">
        <thead>
          <tr>
            <th @click="px()">编号<kao class="a1" :class="aa==0 ? '':'as'"></kao></th>
            <th>名称</th>
            <th @click="px1()">价格<kao class="a2" :class="bb==0 ? '':'as'"></kao></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.goods_name}}</td>
            <td>{{item.price}}</td>
          </tr>
        </tbody>
      </table>
      <div class="fen">
        <p>每页<input type="text" class="aa" v-model="value1" @keyup.enter="xx()"/>条，共10条</p>
        <ul>
          <span v-for="(item,index) in arr" :key="index" @click="ye(item)">{{item}}</span>
        </ul>
      </div>
  </div>
</template> 
<script>
import data1 from './assets/data.json'
import kao from './components/kao.vue'
export default {
  components:{
   data1,kao
  },
  data() {
    return {
      list:data1.data,
      value:"",
      aa:0,
      bb:0,
      value1:'',
      query:{
        pagenum:1,
        pagesize:1,
      },
      arr:[]
    }
  },
  methods:{
    sou(){
      var list1=this.list;
      var list2=list1.filter((item)=>{
        return item.goods_name.includes(this.value)
      })
      this.list=list2;
      if(this.value==""){
        this.list=data1.data;
      }
    },
      px1() {
      if (this.bb == 0) {
        this.list = this.list.sort(function (a, b) {
          return b.price - a.price;
        });
        this.bb = 1;
      } else {
        this.list = this.list.sort(function (a, b) {
          return a.price - b.price;
        });
        this.bb = 0;
      }
    },
    px() {
      if (this.aa == 0) {
        this.list = this.list.sort(function (a, b) {
          return b.id - a.id;
        });
        this.aa = 1;
      } else {
        this.list = this.list.sort(function (a, b) {
          return a.id - b.id;
        });
        this.aa = 0;
      }
    },
    ye(num){
      this.list=data1.data;
      var a1=num*this.value1-this.value1;
      var a2=num*this.value1;
      var arr=this.list.slice(a1,a2);
      this.list=arr;
    },
    xx(){
      this.list=data1.data;
      this.arr=[];
      var total=this.list.length;
      var a1=this.value1-this.value1;
      var a2=this.value1;
      var qq=this.list.slice(a1,a2)
      console.log(qq);
      var pagenum=Math.ceil(total/this.value1);
      for(var a=0;a<=pagenum;a++){
        this.arr.push(a);
      }
      this.list=qq;
    }
  }
}
</script>
<style scoped>
table{
  width: 100%;
}
.as{
  transform: rotateX(180deg);
}
th{
  position: relative;
  line-height: 30px;
}
.a1{
  position: absolute;
  top: 0;
  left: 60%;
}
.a2{
  position: absolute;
  top: 0;
  left: 60%;
}
.fen{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.aa{
  width: 20px;
}
p{
  width: 40%;
}
ul{
  width: 40%;
  text-align: center;
  margin-right: 300px;
}
span{
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #000;
}
</style>