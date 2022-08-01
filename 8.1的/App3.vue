<template>
 <h1>学习vue3语法</h1>
 <h2>姓名：{{name}}</h2>
 <h2>年龄：{{age}}</h2>
 <h3>性别：{{sex}}</h3>
 <h3>习惯：{{hobbo}}</h3>
 <h3>职业：{{iob.type}}</h3>
 <h3>月薪：{{iob.salary}}</h3>
 <h3>崇拜的人物：{{a.b.c.d.eeee}}</h3>
 <h4>我是一个东西：{{a1.b1.c1.ccc}}</h4>
 <button @click="persionInfo">我是vue3中获取</button>
 <!-- <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <button @click="getSetupInfo">我是vue2获取v3的方法</button>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <button  @click="getvu2info">我是vue3获取v2的方法</button> -->
 
 <br/>
 <button  @click="changeIngo">我来修改性别</button>
 
  
</template>
<script lang="ts">
// import {h} from 'vue'
import {ref,reactive} from 'vue'
export default {
  // data() {
  //   return {
  //     sex:"男",
  //     name:"小明",
  //     age:10
  //   }
  // },
  // created() {
  //   console.log("lalala");
    
  // },
  // methods: {
  //   getSetupInfo(){
  //     // console.log(this.sex);
  //     // console.log(this.name);
  //     // console.log(this.age);
  //   }
  // },
  setup() {
    // console.log("我是www");
    
    let name=ref("小的");
    let age=ref(18);
    let sex=ref("男")
    let hobbo=ref(["吸烟","喝酒","带货"])

   let a1=ref({
     b1:{
       c1:{
         "ccc":"亚瑟"
       }
     }
   })

  //职业年薪
  let iob:{
    type:string,
    salary:string
  }=reactive({
    type:"全栈工程师",
    salary:"30"
  })

  let a=reactive({
    b:{
      c:{
        d:{
          "eeee":"雷锋"
        }
      }
    }
  })
    const persionInfo=()=>{
      alert(`我是${name},我${age}岁`)
    };
    const getvu2info=()=>{
      // console.log(this,"aaaaa");
      // console.log(sex);
      // console.log(getSetupInfo);
      console.log(name);
      console.log(age);
      
    }
    //修改数据
    const changeIngo=()=>{
      // console.log("我是修改性别的函数");
      // console.log(sex,"sexsexsex");
      // console.log(name,"name");
      // console.log(age,"age");
      sex.value="女"
      // console.log(sex);
      console.log(hobbo);
      hobbo.value[0]="学习";
      // iob.value.type="ui-工程师";
      console.log(iob,"aaaaa");
      iob.salary="120",
      iob.type="全栈架构师",
      a.b.c.d.eeee="李白"
      
    }
    return {
      name,age,persionInfo,getvu2info,sex,changeIngo,hobbo,a,iob,a1
    };
    // return ()=>h("h1","我是一个内容")
  }
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
