<template>
 <h1>学习vue3语法</h1>
 <h2>姓名：{{name}}</h2>
 <h2>年龄：{{age}}</h2>
 <h3>性别：{{sex}}</h3>
 <h3>习惯：{{hobbo}}</h3>
 <h3>职业：{{iob.type}}</h3>
 <h3>月薪：{{iob.salary}}K</h3>
 <h3>崇拜的人物：{{a.b.c.d.eeee}}</h3>
 <h4>人物：{{a1.b1.c1.ccc}}</h4>
 <button @click="persionInfo">点击显示</button>
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
 <br/>
 <button  @click="changeIngo">我来修改</button>
 
  
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
    
    let name=ref("小明");
    let age=ref(24);
    let sex=ref("男")
    let hobbo=ref(["看电视","运动","睡觉"])

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
    type:"警察",
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
      iob.type="电脑",
      a.b.c.d.eeee="哇啦哇啦"
      
    }
    return {
      name,
      age,
      persionInfo,
      getvu2info,
      sex,
      changeIngo,
      hobbo,
      a,
      iob,
      a1
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

</style>

