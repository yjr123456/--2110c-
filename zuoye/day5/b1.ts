// //new 新的请求HTTP
// let ajax=new XMLHttpRequest()
// ajax.open("get","http://baidu.com")
// //发送数据
// ajax.send()
// //接受返回值，判断是否返回成功
// ajax.onreadystatechange=function(){
//     if(ajax.status===200&&ajax.readyState===4){
//         console.log("我是成功返回值");
//     }
// }

// // //用ts封装
//    //1使用interface

// // interface IParams{
// //     methods:string,
// //     url:string,
// //     data?:any
// // }
// // enum Status{
// //     Success=200,
// //     ReadyState=4
// // }
// // function getAjax(params:IParams){
// //     let ajax=new XMLHttpRequest();
// //     ajax.open(params.methods,params.url)
// //     ajax.send(params.data)
// //     ajax.onreadystatechange=function(){
// //         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
// //              console.log("我们可以用了");   
// //         }
// //     }
// // }

// // interface 和 type 区别
// // 相同点 ：type和interface都可以声明对象和类型
// // 不同点 :  1 type是赋值，进行别名的修改
// //           2 interface声明一个类型
// //           3 type可以声明基础练习数据，interface只能声明对象
// //           4 interface可以使用extends进行继承，但是type 不可以，因为是对象别名，属于复制的一种

// //用ts封装
// //2使用type 
// interface IParams{
//     methods:string,
//     url:string,
//     data?:any
// }
// enum Status{
//     Success=200,
//     ReadyState=4
// }
// function getAjax(params:IParams){
//     let ajax=new XMLHttpRequest();
//     ajax.open(params.methods,params.url)
//     ajax.send(params.data)
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
//              console.log("我们可以用了");   
//         }
//     }
// }

// // interface users:string//错误的写法


// // type user=string

// // interface IParams{
// //     str:string
// // }
// // function Input(str:user):user{
// //     return str.slice(0,2)
// // }
// // //把返回结果赋值给userInput
// // let userInput=Input("hallo")
// // //重新给其赋值一个字符串类型的值，没有报错，说明用type声明的字符串生效
// // userInput="new"

// //interface继承 extends

// //拓展接口
// // interface Animal{
// //     name:string
// // }
// // interface Bear extends Animal{
// //     honey:boolean
// // }
// // //声明一个类型为Bear类型的对象，要求既要有name,又要有honey
// // const bear:Bear={
// //     honey: false,
// //     name: "sss"
// // }
// // console.log(bear.name);
// // console.log(bear.honey);


// //type不能使用 extends进行继承
// // type Animal={
// //     name:string
// // }
// // type Bear={
// //     honey:boolean
// // }
// // //声明一个类型为Bear类型的对象，要求既要有name,又要有honey
// // const bear:Bear={
// //     honey: false,
// //     name: "sss"
// // }
// // console.log(bear.name);
// // console.log(bear.honey);



// //interface继承type类型

// // interface Animal{
// //     name:string
// // }
// // type Bear={
// //     honey:boolean
// // }
// // interface Animal extends Bear{
// //     color:string
// // }
// // //声明一个类型为Bear类型的对象，要求既要有name,又要有honey
// // const bear:Animal={
// //     honey: false,
// //     name:"hhh",
// //     color:"red"
// // }
// //type 类型是不继承 interface

// // interface Animal{
// //     name:string
// // }
// type Bear ={
//     honey:boolean
// }
// // 标识符“Bear”重复
// type Bear={
//     color:boolean
// }
// const bear:Bear={
//     honey:false
// }

// // //完成的定义一个函数类型

// // let add:(x:number,y:number)=>number;
// // add=(arg1:number,arg2:number):number=>arg1+arg2;

// // //错误的例子

// // // 不能将类型“(arg1: string, arg2: string) => string”分配给类型“(x: number, y: number) => number”。
// // //   参数“arg1”和“x” 的类型不兼容。
// // //     不能将类型“number”分配给类型“string”。
// // add=(arg1:string,arg2:string):string=>arg1+arg2


// //使用接口定义函数类型

// // interface Add{
// //     (x:number,y:number):number;
// // }

// // // 不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
// // //   参数“arg1”和“x” 的类型不兼容。
// //     // 不能将类型“number”分配给类型“string”。
// // let add:Add=(arg1:string,arg2:string):string=>arg1+arg2;

// //类型别名

// // type Add=(x:number,y:number)=>number;

// // // 不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
// // //   参数“arg1”和“x” 的类型不兼容。
// //     // 不能将类型“number”分配给类型“string”
// // let add:Add=(arg1:string,arg2:string):string=>arg1+arg2;

// //可选类型
// // type Add=(x:number,y:number)=>number;
// // let add:Add=(arg1:string,arg2:string):string=>arg1+arg2;

// // add(1,2);//right
// // add(1,2,3);//应有 2 个参数，但获得 3 个。
// // add(1);//应有 2 个参数，但获得 1 个。

// // type Add=(x?:number,y:number)=>number;//必选参数不能位于可选参数后
// // interface Add{
// //     x?:number,
// //     y:number
// // }

// // const count=0;
// // const countUp=(step=1)=>{
// //     count +=step;//无法分配到 "count" ，因为它是常数。
// // }

// {a}
// let array=[1,2,3,4,5]
// let a=[...array]

// const add=(x:number,y:number=2)=>{
//     return x+y;
// }
// let result=add()

// var count=0;
// function countUp(step){
//     step=step||1;
//     count+=step;
// }
// countUp()

// //javascript
// function handleData(arguments){
//     if(arguments.length===1) return arguments[0]*2;
//     else if(arguments.length===2) return arguments[0]*arguments[1];
//     else return Array.prototype.slice.apply(arguments).join("_");
// }
// handleData(2);//4
// handleData(2,3);//6
// handleData(1,2,3,4,5);//6

// const handleData=(arg1,...args)=>{
//     //这里省略逻辑
//     console.log(args);
    
// }