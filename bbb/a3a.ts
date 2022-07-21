//数据类型number
let nums:number=12
let num2:number=13
// num="ddd"  不能将类型string给number
let sum=nums+num2
console.log(sum);

//字符串string
let name1:string="halo"
let age:number=24
//造个句子
let persinInfo=`my name is ${name1},age is ${age}`
document.body.innerHTML=persinInfo
console.log(persinInfo);

//boolean类型
let boolean:boolean=false

//js创建数组的方式
// 1字面量创建[] 2new Array


// 第一种：字面量创建方式
let array:[]=[]
//第二种
let Arry:Array <[]>=[]
//------
//不能将类型“string”分配给类型“number”。
// let numArry:number[]=['1']
let numArry:number[]=[1,2,3,4,5]

// 不能将类型“number”分配给类型“string”。ts(2322)
// let stringArry:Array<string>=[12,23,32]
let stringArry:Array<string>=["12","23"]

//对象object
// ---字面量创建方法
let obj4:{name:string,age:number}
let obj5:{name:"哇哇",age:20}
let obj6:{name:string,age:number}
obj4={name:"哈",age:27}
obj6={name:"嘻嘻",age:22}

//undefind和null类型
let undefind:undefined=undefined;
let null1:null=null

//元组
let person:[name:string,age:number,sex:boolean,height:number]=["师福齐",24,true,180]
console.log(person[2]);
person.push(49)
console.log(person);

//枚举
enum Color1{
    Red=1,
    green=2,
    Blue2=3
}
let a:Color1=Color1.Blue2
console.log(a);
//any
let value1: any;
value1 = 123;
value1 = "abc";
value1 = false;

//void类型
 
 function alertName3(): void  {
    console.log('我是void');  
}
// 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
 
 function alertNames3(): string{
    console.log('我不是void');  
    return 'hallo'
}

//never
// 返回never的函数必须存在无法达到的终点
function error3(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail3() {
    return error3("Something failed");
}

//交叉类型
 
  interface use {
    name: string,
    age: number
}
  interface per {
    sex: number
}
type sss = use & per
let persion: sss = {name: "hahaha",age: 21,sex:1}

//联合类型(|)

let aas:number|string;
aas=1
aas="哈喽 发动机"
// 不能将类型“boolean”分配给类型“string | number”。
// aas=false


//类型断言
let abc:any;
abc=123;
abc='abcd';
let abcd=(<string>abc).length


let xx:any;
xx=123;
xx='abcd';
let axx=(xx as string).length

//数据枚举enum 详情
enum Status3{
    Uploading,
    Success,
    Failed
   }
    console.log(Status3.Uploading);
    console.log(Status3["Success"]);
    console.log(Status3.Failed);