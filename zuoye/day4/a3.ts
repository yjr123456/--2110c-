
// js中实现一个计数的函数

// let count = 0;
// const countUp = () => count++


// 闭包的概念
// 1. 函数套函数
// 2. 外部不能获取内部变量
// 3. 返回函数
// 4. 内部可以获取外部变量
// 5. 是自调用函数
const closure=(()=>{
    let count=1
    const sayHi=(a,b)=>{
        return a+b
    }
    return sayHi(count,1)
})()
const countUp=(()=>{
    let count=0
    return ()=>{
        return count++
    }
})
//javascript
let countUps=()=>{
    return ++countUps.count1;
}
countUps.count1=0;
console.log(countUps());
console.log(countUps());

// 在ts中如何使用闭包实现上面的方式呢

//混合接口
// 变量永久保存，不会被污染
// 变量只是内部使用
// 定义每个类型，方便维护

interface Counter {
    (): void;
    count: number;
}

const getCounter = (): Counter => {
    const C = () => {
        C.count++
    }
    C.count = 0;
    return C
}

const counter:Counter = getCounter()
counter()
console.log(counter.count);
counter()
console.log(counter.count);

//索引签名 重点：绕开多余属性

interface Rolec{
    [id:number]:string
}
let role:Rolec={
    0:"哈哈",
    1:"你好",
}
let copeRole:Rolec={
    // 不能将类型“{ A: string; N: string; }”分配给类型“Rolec”。
   // 对象文字可以只指定已知属性，并且“'A'”不在类型“Rolec”中。
    'A':"哈哈",
    "N":"你好"
}

//数组模式
let roleArray:Rolec=["哈哈","你好"]
roleArray[0]="哇哇哇哇"

//readonly只有查看权限，没有修改权限
interface RoleInfo{
    readonly [id:number]:string
}
const roleChange:RoleInfo={
    0:"哈哈哈",
};
roleChange[0]="哈哈";//类型“RoleInfo”中的索引签名仅允许读取。

const obj={
    123:"a",//这里定义一个数值类型的123这个属性
    "123":"b"//对象文本不能具有多个名称相同的属性
}
console.log(obj);

//接口继承
interface Vagetables{
    color:string;
}
interface Tomato extends Vagetables{
    // color:string;继承了，不需要了
    radius:number
}
interface Carrot extends Vagetables{
    // color:string;继承了，不需要了
    length:number;
}

//类型“{}”缺少类型“Tomato”中的以下属性: radius, color
let useTomato:Tomato={
    // 类型 "{ radius: number; }" 中缺少属性 "color"，但类型 "Tomato" 中需要该属性。
    radius:13,
    color:"red",
}
//混合接口类型

//不想被污染掉，放到闭包里，形成独立的作用域
// let count = 0;
// const countUp = () => count++

const countUp2=(()=>{
    let count=0;
    function useCount(){
        return ++count;
    }
    return useCount
})()
console.log(countUp2());
console.log(countUp2());


// const countUp1=(()=>{
//     let count=0;
//     return ()=>{
//         return ++count;
//     }
// })();
// console.log(countUp1());
// console.log(countUp1());

//js中手动添加对象属性
let obj1={}
obj1.name="哈哈"
//  //javascript
//  let countUps=()=>{
//      return ++countUps.count;
//  }
//  countUps.count=0;
//  console.log(countUps());
//  console.log(countUps());
 


//创建一个构造函数
//步骤1：新建构造函数
function Person(name){
    this.name=name;
    this.age=18,
    this.sayName=function(){
        console.log(this.name);
    }
}
//步骤2创建实例1
var person1=new Person("1号");
console.log(person1);
//步骤三 创建实例2
var person2=new Person("2号");
console.log(person2);

//结果均为true
person1.__proto__===Person.prototype;
person2.__proto__===Person.prototype;

//1号 2号
console.log(person1.name,person2.name);

//l8 ,18
console.log(person1.age,person2.age);
console.log(person1,person2);


//实例化ajax核心方法
// let ajax=new XMLHttpRequest()
// //建立链接open("请求方法"，"请求链接”，同步或异步)
// ajax.open("get","https://api-hmugo-web.ithema.net/api/puplic/v1/home/swiperdata"),
// //发送ajax请求
// ajax.send()
// //ajax状态判断
// ajax.onreadystatechange=function(){
//     if(ajax.status===200&&ajax.readyState===4){
//         console.log(ajax.response);
//     }
// }
//使用interface的束缚接口
interface IParams{
    methos:String,
    url:String,
    data?:any
}
//2将上述ajax封装到函数里面
// function request(params:IParams){
//     let ajax=new XMLHttpRequest();
//     ajax.open(params.methos,params.url)
//     ajax.send(params.data)
//     ajax.addEventListener=function(){
//         if(ajax.status==200&&ajax.readyState==4){
//             console.log(Ajax.response);
            
//         }
//     }
// }

//原生ajax
//创建ajax
let ajax=new XMLHttpRequest()
//建立链接open("请求方法"，"请求链接”，同步或异步)
ajax.open("get","https://api-hmugo-web.ithema.net/api/puplic/v1/home/swiperdata"),
//发送ajax请求
ajax.send()
//ajax状态判断 判断是不是返回成功和状态码
ajax.onreadystatechange=function(){
    if(ajax.status===200&&ajax.readyState===4){
        console.log(ajax.response);
    }
}

//是否请求成功 状态码的封装
enum Status{
    Success=200,//成功
    ReadyStatus=4//连接成功
}

//定义params
interface IParams{
    methods:string,
    url1:string,
    data?:any
}

function getAjaxResponse(params:IParams){
    let ajax=new XMLHttpRequest()
        //method方法和url请求
        ajax.open(params.methods,params.url1)
        ajax.send(params.data)
        //判断请求地址
        ajax.onreadystatechange=function(){
          if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyStatus){
              console.log("我是成功的");
              
          }
        }
}
const params={method:"get",url1:"https://api-hmugo-web.ithema.net/api/puplic/v1/home/swiperdata"}
