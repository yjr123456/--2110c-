
//定义定时器的时间
var timer;
//定义数组存放数据
var arrs=["小明","西瓜","李白","司马光","诸葛","小狗","广告","e't","的","小张","哇哇哇","木瓜","哈哈",
"到的","葫芦","十三","添加剂","333","大苏打","看看","22","33分","22","p-pp","热阿",'a','b','v','d','e'];
//获取元素
var box1=document.getElementById("box");
//遍历数组
for(var a=0;a<arrs.length;a++){
    //创建新元素
    //创建指定文本的按钮你需要在按钮元素后添加文本节点
    var renming=document.createElement("div")
    //innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML。
     renming.innerHTML=arrs[a];
     //className 属性设置或返回元素的 class 属性。
     renming.className="name";
     //添加人名
     box1.appendChild(renming)
}
//按钮功能
var ann=document.getElementById("ann");
//点击按钮添加
ann.onclick=function(){
    if(this.value=="点名"){
        //设置定时器
        timer=setInterval(function(){
           //清空所有颜色
           for(var b=0;b<arrs.length;b++){
             box1.children[b].style.background=''
           }
           //对数组中的每一个随机选取
           var random=parseInt(Math.random()*arrs.length)
           //留下当前颜色
           box1.children[random].style.background="red"
        },500)
        this.value="停止"
    }else{
       //停止循环
       clearInterval(timer);
       this.value="点名"
    }
}