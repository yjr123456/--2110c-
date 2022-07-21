// 数字枚举
// enum 详细讲解

// 数字类型    语法使用的是es6的语法，Uploading: Uploading
//自动添加指定索引符合  我们可以像访问对象一样使用 ","和“[]'两种方式访问里面的值
enum Statusa{
    Uploading,
    Success,
    Failed
  }
  console.log(Statusa.Failed);
  console.log(Statusa['Failed']);
  console.log(Statusa.Success);
  
  
  //指定索引项
  // 总结: 每次手动添加索引的时候,下面数据如果不是手动添加的索引,将会以递增的方式,把索引展示出来
  enum Anmimal{
      SmallPig=123,//小猪
      Yu,//🐟
      Xing=349,//猩猩
      HuLi//狐狸
  }
  console.log(Anmimal.SmallPig);
  console.log(Anmimal["Yu"]);
  console.log(Anmimal.HuLi);
  
  
  //计算值
  const getValue=()=>{
      return 1
  }
  //计算值和常量
  enum Constant1{
      a=getValue(),
      // b,==>报错--枚举成员必须具有初始化表达式
      b,
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
  const names="gg"
  enum Message{
      Error="error message",//错误信息
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
  enum Anmimal1{
      Ma=1,
      Yang=2,
  }
  interface Ma{
      type:Anmimal1.Ma
  }
  interface Yang{
      type:Anmimal1.Yang
  }
  let yang:Yang={
      type:Anmimal1.Ma//不能将类型“Anmimal1.Ma”分配给类型“Anmimal1.Yang”。
  }
  let ma:Ma={
      type:Anmimal1.Ma
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
  
  
  
  enum Anmimal2{
      Lv,//驴
      Gou//狗
  }
  const enum Deng2{
      Off2,
      On2
  }
  const status32=Anmimal2.Gou
  const status64=Deng2.Off2
  console.log(status32,status64);
  
  
  
  
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
  interface Roles{
      readonly 11:string;
      readonly 12:string;
  
  }
  const roles:Roles={
      11:"哇哇",
      12:"葫芦"
  }
  
  role[1]="请求";//无法分配到 "1" ，因为它是只读属性。
  
  //const 和readonly 对比
  const NAME:string="哇啦哇啦";
  
  NAME="抬头"//无法分配到 "NAME" ，因为它是常数。
  
  const obj={
      name:"看看"
  }
  obj.name="谢谢"
  
  interface Info{
      readonly name:string
  }
  const info:Info={
    name:"你好"
  }
  
  info["name"]="老铁666"//无法分配到 "name" ，因为它是只读属性
  
  //类型别名
  interface AddFunc{
      (num1:number,num2:number):number
  }
  const add:AddFunc=(n1,n2)=>n1+n2;
  const join:AddFunc=(n1,n2)=>`${n1} ${n2}`;//不能将类型“string”分配给类型“number”。
  add("a",2);//类型“string”的参数不能赋给类型“number”的参数
  
  
  
  
  