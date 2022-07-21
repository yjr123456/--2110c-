//数字类型的定义
// 语法使用的是es6的语法,Uploading: Uploading 2自动添加指定索引符合
// 我们可以像访问对象一样使用',' 和 '[]'两种方式访问里面的值
enum Statuss1{
    Uploading,
    Success,
    Failed
}
console.log(Status.Failed);
console.log(Status["Failed"]);
console.log(Status.Success);

//指定索引值
enum Anmimal{
    // 鸡
    Ji=200,
    Ya,//鸭
    Wolf=300,//狼
    Lu  //驴
}
console.log(Anmimal.Wolf);
console.log(Anmimal["Ya"]);
console.log(Anmimal.Lu);

//计算值和常量
const getValues=()=>{
    return 222
}
enum Constant{
    a1=getValues(),
     b1,//枚举成员必须具有初始化表达式。
     c1,
}

//反向映射
enum Status{
  Success1=200,
  NotFound=404,
  Error=500
}
console.log(Status.Error);
console.log(Status[404]);
console.log(Status.NotFound);

//字符串枚举
const namess="小明"
enum Message{
    //错误信息
    Error1="error message",
    SuccessError1=200,// 枚举成员必须具有初始化表达式。
    ClientError1=names//含字符串值成员的枚举中不允许使用计算值
}
console.log(Message.SuccessError,"SuccessError");
console.log(Message.Error);
console.log(Message["ClientError"]);
// 异构枚举
enum Result{
    Faild1=0,
    Success1="Success"
}

//枚举成员类型
enum Anmimal{
    Dogs=1,
    Cats=3,
}
//狗
interface Dogs{
    type:Anmimal.Dogs
}

//猫
interface Cats{
    type:Anmimal.Cats
}
let cats:Cats={
    type:Anmimal.Dogs//不能将类型“Anmimal.Dog1”分配给类型“Anmimal.Cats”。
}
let dogs:Dogs={
    type:Anmimal.Dogs
}

//联合类型
enum Keys{
    //关闭
    Off1,
    On1
}

interface Deng{
    statua:Keys
}
let deng:Deng={
    statua:Keys.Off1
}

///运行时对象
enum E{
    X,
    Y
}
const getIndexs=(enumObj:{Z:number}):number=>{
    return enumObj.Z
}
console.log(getIndexs(V));//找不到名称“V”

//const enum
enum Anmimal{
    Hou,//猴
    Tu,//兔
}
const enum Deng1{
    Off2,
    On2
}
const status4=Anmimal.Tu
const status5=Deng1.Off2
console.log(status4,status5);

//  interface
//   我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：firstName 和 lastName，也就是英文的名和姓，然后返回一个拼接后的完整名字
 

//  interface Persion {
//     firstName: string, 
//     lastName: string,
//     age: number,
//     sex: boolean,
//     color: string
//  }

function getFullName({firstName,lastName, age, sex}: persion): string {
    return `My name ${lastName} ${firstName}, My age is ${age}, like smoke, ${sex}`
}
interface Persion{
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    colors?:string,
    [prop:string]:any
}
let result1 = getFullName({firstName: '瓦拉', lastName: '哈克', age: 44, sex:true, height: 193})

// 绕开多余属性的检查,类型断言  !!!!!
// 1. 类型断言 as <>
// 2. [props: string]: any

// interface Vegetables{
//     color?:string,
//     type:string
// }
// const getVegetable=({color,type}:Vegetables):string=>{
//    return `A ${color?color+'':" "}${type}`
// }
// getVegetable({
//     type:"qiezi",
//     size:12,
//     price:15
// } as Vegetables)

interface Vegetables{
    color?:string,
    type:string,
    [prop:string]:any
}

// const getVegetables = ({color, type}: Vegetables) : string => {
//    return  `A ${color? color + "" : " "}${type}`
// }

// getVegetables({
//    type: "tomato",
//    size: 12,
//    price: 1.2
//  });

//利用类型兼容性
interface Vegetables{
    type:string;
}
const getVegetable1s=({type}:Vegetables)=>{
    return `A ${type}`
}
const options={type:"qiezi",size:12};
getVegetable1s(options);

//只读属性 readonly
interface Role1{
    readonly 98:string;
    readonly 10:string;
}
const role1:Role1={
  98:"很尴尬",
  10:"尴尬",
}
role1[10]="急急急";//无法分配到 "10" ，因为它是只读属性

//const 和 readonly 对比

const NAM1E:string="哇哈哈"
NAM1E="杀杀杀"//无法分配到 "NAM1E" ，因为它是常数

const objv={
    name:"卡卡"
}
objv.name="好的"

interface Info{
    readonly name:string
}
const info1:Info={
   name:"钱钱钱"
}
info["name"]="哈哈哈"//无法分配到 "name" ，因为它是只读属性
interface AddFunc1{
    (num1:number,num2:number):number
}
const add1:AddFunc1=(a1,a2)=>a1+a2;
const join1:AddFunc1=(a1,a2)=>`${a1} ${a2}`//不能将类型“string”分配给类型“number”
add1("aa",2)// 类型“string”的参数不能赋给类型“number”的参数。