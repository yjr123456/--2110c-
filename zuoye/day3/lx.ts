// 数字枚举
// enum 详细讲解

// 数字类型    语法使用的是es6的语法，Uploading: Uploading
//自动添加指定索引符合  我们可以像访问对象一样使用 ","和“[]'两种方式访问里面的值
enum Status{
  Uploading,
  Success,
  Failed
}
console.log(Status.Failed);
console.log(Status['Failed']);
console.log(Status.Success);


//指定索引项
// 总结: 每次手动添加索引的时候,下面数据如果不是手动添加的索引,将会以递增的方式,把索引展示出来
enum Anmimal{
    Pig=200,//猪
    Dog,//狗
    Cat=300,//猫
    Snake//蛇
}
console.log(Anmimal.Cat);
console.log(Anmimal["Dog"]);
console.log(Anmimal.Snake);


//计算值
const getValue=()=>{
    return 1
}
//计算值和常量
enum Constant{
    a=getValue(),
    // b,==>报错--枚举成员必须具有初始化表达式
    b=1,
    c=2,
}
//反向映射
enum Status1{
    Success=200,
    NotFound=404,
    Error=500
}
console.log(Status1.Error);
console.log(Status1[404]);
console.log(Status1.NotFound);

//字符串枚举
const getValue1=()=>{
    return 0
}
const names="小明"
enum Message{
    Error="error message",//成功的变成消息
    SuccessError=200,//枚举成员必须具有初始化表达式
    // 含字符串值成员的枚举中不允许使用计算值
    ClientError=names
}
console.log(Message.SuccessError,"SuccessError");
console.log(Message.Error);
console.log(Message['ClientError']);

//异构枚举
enum Result{
    Faild=0,
    Success="Success"
}

//枚举数据类型
enum Anmimal{
    Dog1=1,
    Cat1=2,
}
interface Dog1{
    type:Anmimal.Dog1
}
interface Cat1{
    type:Anmimal.Cat1
}
let cat1:Cat1={
    type:Anmimal.Dog1//不能将类型“Anmimal.Dog1”分配给类型“Anmimal.Cat1”。
}
let dog:Dog1={
    type:Anmimal.Dog1
}

//联合类型
enum Keys{
    //关闭
    Off,
    On
}
interface Light{
    status:Keys
}
let light:Light={
    status:Keys.Off
}

//运行时对象
enum E{
    A,
    B
}
const getIndex=(enumObj:{C:number}):number=>{
    return enumObj.C;
}
console.log(getIndex(E));



enum Anmimal{
    Rabbit,
    Pigs
}
const enum Light90{
    Off,
    On
}
const status45=Anmimal.Pigs
const status57=Light90.Off
console.log(status45,status57);




// const getVegetables{

// }
// getVegetables

// interface
// 我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：firstName 和 lastName，也就是英文的名和姓，然后返回一个拼接后的完整名字

// interface persion{
//    firstName:string,
//    lastName:string,
//    age:number,
//    sex:boolean,
//    colors:string,
// }

function getFullName({firstName,lastName,age,sex}:persion):string{
    return `My name ${lastName} ${firstName},my age is ${age},like smoke,${sex}`
}
// 类型“{ firstName: string; lastName: string; }”的参数不能赋给类型“persion”的参数。
//   类型“{ firstName: string; lastName: string; }”缺少类型“persion”中的以下属性: age, sex, colorsts
// let result1=getFullName({firstName:"world",lastName:"hello"})
// console.log(result1);

// let result1=getFullName({firstName:"里",lastName:"根",age:20,sex:false})
// document.body.innerHTML=result1
// console.log(result1);


//可选属性?
interface persion{
   firstName:string,
   lastName:string,
   age:number,
   sex:boolean,
   colors?:string,
   [prop:string]:any
}
let result=getFullName({firstName:"三",lastName:"张",age:20,sex:false,height:123})

//类型断言as<>       [prop:string]:any

// interface Vegetables{
//     color?:string;
//     type:string;
// }
// const getVegetabless=({color,type}:Vegetables):string=>{
//     return `A ${color?color+'':' '} ${type}`
// }

// getVegetabless({
//     type:"tomato",
//     size:12,
//     price:1.2
// } as Vegetables)


interface Vegetables{
    color?:string;
    type:string;
    [prop:string]:any
}
const getVegetables=({color,type}:Vegetables):string=>{
    return `A ${color?color+'':" "}${type}`
}



// getVegetables({
//     type:"tomato",
//     size:12,
//     price:1.2
// } )


//利用类型兼容性
interface Vegetables{
    type:string;
}
const getVegetables1=({type}:Vegetables)=>{
    return `A ${type}`
};
const option={type:"tomato",size:12};
getVegetables1(option)


//只读属性 readonly
interface Role{
    readonly 0:string;
    readonly 1:string;

}
const role:Role={
    0:"halou",
    1:"wawawa"
}

role[1]="我是快乐的";//无法分配到 "1" ，因为它是只读属性。

//const 和readonly 对比
const NAME:string="哇哇哇";

NAME="抬头"//无法分配到 "NAME" ，因为它是常数。

const obj={
    name:"哇哇哇"
}
obj.name="啊啊啊"

interface Info{
    readonly name:string
}
const info:Info={
  name:"哇哇哇"
}

info["name"]="啊啊啊"//无法分配到 "name" ，因为它是只读属性

//类型别名
interface AddFunc{
    (num1:number,num2:number):number
}
const add:AddFunc=(n1,n2)=>n1+n2;
const join:AddFunc=(n1,n2)=>`${n1} ${n2}`;//不能将类型“string”分配给类型“number”。
add("a",2);//类型“string”的参数不能赋给类型“number”的参数




