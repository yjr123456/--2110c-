<template>
  <div>
    <p class="tu">我的书架<span class="shu" @click="fanhui()"><</span></p>
    <p class="kan">正在看<span class="zzk" @click="zk()">></span></p>
    <ul>
      <li v-for="(item, index) in tslist" :key="index" v-show="flag">
        <p class="k1" v-show="item.static==0 ? true:false">
          {{ item.name
          }}<span class="k2" @click="ykw(index)">标记为已看完</span
          ><span class="scts" @click="sc(index)">删除图书</span>
        </p>
      </li>
    </ul>
    <p class="kan">已完结<span class="zzk" @click="zk1()">></span></p>
    <ul>
      <li v-for="(item, index) in tslist" :key="index" v-show="flag1">
        <p class="k1" v-show="item.static!=0 ? true:false">
          {{ item.name
          }}<span class="k2" @click="zkyb(index)">再看一遍</span
          ><span class="scts" @click="sc(index)">删除图书</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      aa: 0,
      bb: 0,
      flag: false,
      flag1: false,
    };
  },
  computed: {
    ...mapState(["tslist"]),
  },
  created() {
    console.log(this.tslist);
  },
  methods: {
      ...mapMutations(["ykw1",'sc1','zkyb1']),
    //返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    zk() {
      if (this.aa == 0) {
        this.flag = true;
        this.aa = 1;
      } else {
        this.flag = false;
        this.aa = 0;
      }
    },
    zk1() {
      if (this.bb == 0) {
        this.flag1 = true;
        this.bb = 1;
      } else {
        this.flag1 = false;
        this.bb = 0;
      }
    },
    //已看完
    ykw(index){
        this.ykw1(index)
    },
    //删除
    sc(index){
        this.sc1(index)
    },
    //再看一遍
    zkyb(index){
        this.zkyb1(index)
    }
  },
};
</script>
<style>
.tu {
  background-color: red;
  font-size: 28px;
  font-weight: 700;
  line-height: 80px;
  color: white;
  margin: 0px;
  text-align: center;
  position: relative;
  /* margin-bottom: 50px;  */
  position: relative;
}
.shu {
  font-size: 60px;
  position: absolute;
  left: 10px;
}
.kan {
  color: white;
  background-color: red;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  text-align: left;
  padding-left: 20px;
}
.zzk {
  position: absolute;
  right: 10px;
  top: 1px;
  /* height: 10px; */
}
.xz {
  transform: rotateX(90deg);
}
.k1 {
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  position: relative;
}
.k2 {
  position: absolute;
  font-size: 12px;
  color: red;
  top: 5px;
  right: 65px;
  display: inline-block;
  border-right: 2px solid #000;
  padding-right: 5px;
}
.scts {
  position: absolute;
  font-size: 12px;
  color: #ccc;
  top: 5px;
  right: 10px;
  display: inline-block;
}
</style>
