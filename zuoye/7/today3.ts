//任何类型的值都可以赋值给unknown
let value1:unknown
value1="a"
value1=123

let anyValue:any;
anyValue=1,
anyValue="ddd"

let value2:unknown;
let value3:string=value2;//不能将类型“unknown”分配给类型“string”
value1=value2;
//----------
let anyValue1:any;
let anyValue12:string=anyValue

//3
let value4:unknown;
value4+=1;//运算符“+=”不能应用于类型“unknown”和“1”。

let anyValue4:any
anyValue4+=1

//交叉类型

type type1=unknown&string;//string
type type2=unknown&number;//number
type type3=unknown&unknown;//unknown
type type4=unknown&string[];//string[]

type type11=any&string;//any
type type22=any&number;//any
type type33=any&any;//any
type type44=any&string[];//any


//never是unknown的子类
type type5=never extends unknown?true:false;//true

//
type type6=keyof unknown;


 //
 value1===value2;
 value1!==value2;
 value1+=value2;//运算符“+=”不能应用于类型“unknown”和“unknown”

 let value5:unknown;
 value5.age;//类型“unknown”上不存在属性“age”
 value5();//此表达式不可调用。类型 "{}" 没有调用签名。
 new value5();//此表达式不可构造。类型 "{}" 没有构造签名。

 //映射
 type Types<T>={[P in keyof T]:number};
 type type10=Types<any>;

 function smile(
     target:Greeter,
     propertyKey:string,
     descriptor:PropertyDescriptor
 ){
     return {
         ...descriptor,
         value:function(name:string){
             console.log("smile");
             //调用被装饰的方法
             return descriptor.value(name);
         }
     }
 }
 class Greeter{
     greeting:string;
     constructor(message:string){
         this.greeting=message;
     }
     @smile
     greet(name:string):string{
        console.log(`welcome,${name}!`);
        return "hello";
     }
 }
 const g=new Greeter("msg");
 g.greet("tom");
 g.greet("tom");
 g.greet("tom");
 console.log(g);
 

 //装饰器工厂函数
 function setName(){
     console.log("get setName");
     return function(target:any){
         console.log(target);
         console.log("setName");
     }
 }
 function setAge(){
     console.log("get setAge");
    return function(target:any){
        console.log(target);
        console.log("setAge");
    }
 }

 //
 interface Bar{
     work:()=>void
 }
 type WithStatic<T,U>={
     new():T;
 }&U;
 type BarWithStatic=WithStatic<Bar,{life:number}>;

 //通过装饰器重写了构造函数的类型
 function staticImplements<T>(){
     return <U extends T>(constructor:U)=>{};
 }
 @staticImplements<BarWithStatic>()
 class Foo{
     static life:number;
     work(){
         //do something
     }
 }


//  interface声明可以被覆盖
// interface Info{
//     name:string
// }
// interface Info{
//     age:number
// }
// let info:Info
// info={//类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Info" 中需要该属性。
//     name:"lison"
// }
// info={
//     name:"lison",
//     age:18
// }

//type只能声明一次，并不能被覆盖
type Info={
    name:string
}
//标识符“Info”重复。
type Info={
    age:number
}

//let funcA: (arg: number | string) => void
// 不能将类型“(arg: number) => void”分配给类型“(arg: string | number) => void”。
// 参数“arg”和“arg” 的类型不兼容。
//   不能将类型“string | number”分配给类型“number”。
//     不能将类型“string”分配给类型“number”
let funcA = function(arg: number | string): void {};
let funcB = function(arg: number): void {};
funcA = funcB;

function foo(a: number, b: string): string {
    return a + b;
  }
  let a = foo.apply(this, [1]); // error Property '1' is missing in type '[number]' but required in type '[number, string]'
  let b = foo.apply(this, [1, 2]); // error 不能将类型“number”分配给类型“string”
  let ccd = foo.apply(this, [1, "a"]); // right
  let ccsd = foo.apply(this, [1, "a", 2]); // right
