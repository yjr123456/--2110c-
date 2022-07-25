# interface

### 1、interface

定义函数需要传的参数较多的时候，可以用到interface

### 2、可选属性

格式：属性名 ?：类型

​	那么这个参数就可传可不传

``` js
interface Persion {
    firstName: string, 
    lastName: string,
    age: number,
    sex: boolean,
    colors?: string,
    [prop: string]: any
 }

 let result = getFullName({firstName: '三', lastName: '张', age: 20, sex:false, height: 123})
```

### 3、多于属性

格式：[prop：string]：any

### 4、多余属性检查

如果没有这个属性就会报错没有这个属性

### 5、绕开多余属性检查

绕开多余属性的检查,类型断言  !!!!!

 \* 1. 类型断言 as <>

 \* 2. [props: string]: any

```js
 interface Vegetables{
   color?: string,
   type: string,
   [props: string]: any
}
```

### 6、只读属性**（readonly）

1）使用const修改常量里的属性会报错

​	2）使用const定义一个对象，修改对象里面属性不会报错，如果需要对象里的属性不可以修改，就使用readonly

```js
interface Role {
   readonly 0: string;
   readonly 1: string;
 }

 const role: Role = {
   0: 'super_admin',
   1: 'admin'
 }

 role[1] = '我是快乐的';// 无法分配到 "1" ，因为它是只读属性

 /**
  * const 和 readonly  对比
  */

 const NAME: string = "帅字辈";
// NAME = "抬头" // 无法分配到 "NAME" ，因为它是常数。


const obj = {
   name: '帅字辈'
}
obj.name = "包胜利"

interface Info {
   readonly name: string
}

const info: Info = {
   name: '帅字辈'
}
info['name'] = "包胜利" // 无法分配到 "name" ，因为它是只读属性
```

### 7、函数类型

1）接口能描述普通对象，也可以描述函数类型

​	2）定义函数的时候，名字可以和接口中参数中的额名可以不相同，但位置要一致

### 8、类型别名

```js
interface AddFunc {
   (num1: number, num2: number) : number
}
const add: AddFunc = (n1, n2) => n1 + n2;
const join: AddFunc = (n1, n2) => `${n1} ${n2}`; // 不能将类型'string'分配给类型'number'
add("a", 2); // 类型'string'的参数不能赋给类型'number'的参数
```

