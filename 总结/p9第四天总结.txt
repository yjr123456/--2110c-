# 接口的高阶用法

### 一、基本类型

索引类型、继承接口、混合类型接口

扩展阅读： js原型和原型继承

### 二、知识讲解

###  1、索引类型

（1）、使用接口描述索引的类型和通过索引得到的值得类型

（2）、也可以给索引设置readonly，从而防止所以索引返回值被修改

**索引签名

​    ！！！重点: 绕开多余属性时,[]中间的内容,是可变的

 \*   (1).readonly

``` js
interface Rolec {
    [id: number]: string
}

let role: Rolec = {
    0: 'super_admin',
    1: 'admin'
}

/**
 * 数组模式
 */
let roleArray: Rolec = ['super_admin', 'admin']
roleArray[0] = '我要站着上课'

/**
 * 想要我们的东西不可更改,你只有查看权限,----
 * readonly
 */

interface RoleInfo {
    readonly [id: number]: string
}

const roleCHange: RoleInfo = {
    0: "super_admin"
  };
  roleCHange[0] = "admin"; // 类型“RoleInfo”中的索引签名仅允许读取。

  const obj = {
    123: "a", // 这里定义一个数值类型的123这个属性
    "123": "b" //对象文本不能具有多个名称相同的属性
  };
  console.log(obj); // { '123': 'b' }
```

### 2、接口继承类型

（1）、接口可以继承，这和类一样，提高了接口的复用性

（2）、一个接口可以被多个接口继承，同样，一个接口也可以继承多个接口，多个接口用逗号隔开

  \* 接口继承： extends

``` js
// 这是一个公共接口类型定义
interface Vegetables {
    color: string;
}

/**
 * Tomato: color radius
 */
interface Tomato  extends Vegetables{
  radius: number;
}

interface Carrot extends  Vegetables{
  length: number;
}

//类型“{}”缺少类型“Tomato”中的以下属性: radius, color 
let useTomato: Tomato = {
// 类型 "{ radius: number; }" 中缺少属性 "color"，但类型 "Tomato" 中需要该属性。
   radius: 13,
   color: 'red',
 }
//类型 "{ length: number; }" 中缺少属性 "color"，但类型 "Carrot" 中需要该属性。t
let useCarrot: Carrot = {
    length: 12,
    color: 'red',
}
```

### 3、混合接口类型

（1）、JS的类型是灵活的，在js中，函数是对象类型，对象可以有属性，所以有时我们一个对象它既是一个函数，也包含一些属性

（2）、在3.1版本，TypeScript支持直接给函数添加属性

#### 3.1 混合接口

1. 变量永久保存,不会被污染

2. 变量只是内部使用

3. 定义每个类型,方便维护

``` js
/**
 * 混合接口类型
 */

/**不想被污染掉  放到闭包里,形成独立的作用yu*/
/**
 * 自调用函数
 */
//  let count = 0;
//  const countUp = () => count++;
// console.log(count);
const countUps = (() => {
    let count = 0;
    function useCount(){
        return ++count
    }
    return useCount
})()
console.log(countUps()); // 1
console.log(countUps()); // 2


/**
 * js中手动添加对象属性
 */
 let obj = {}
 obj.name = '小红'
 
 // javascript
 let countUp = () => {
     return ++countUp.count;
   };
   countUp.count = 0;
   console.log(countUp()); // 1
   console.log(countUp()); // 2



/**
    * 混合接口
    * 1. 变量永久保存,不会被污染
    * 2. 变量只是内部使用
    * 3. 定义每个类型,方便维护
    */

    interface Counter {
        (): void; 
        count: number; 
      }
      const getCounter = (): Counter => {
        const c = () => { 
          c.count++;
        };
        c.count = 0; // 再给这个函数添加一个count属性初始值为0
        return c; // 最后返回这个函数对象
      };
      const counter: Counter = getCounter(); // 通过getCounter函数得到这个计数器
      counter();
      console.log(counter.count); // 1
      counter();
      console.log(counter.count); // 2


```

### 4、原型

1、`JS` 中一切皆对象（所有的数据类型都可以用对象来表示）

2、`JS` 并非通过类而是通过构造函数来创建实例，使用 `prototype` 原型模型来实现“继承”。

### 5、构造函数

1、在 `JavaScript` 里，构造函数是用来创建实例的

2、构造函数和普通函数的区别：

* 在命名上，构造函数首字母需要大写；

* 调用方式不同，普通函数是直接调用，而构造函数需要使用 `new` 关键字来进行调用；

* 在构造函数内部，`this` 指向的是新创建的实例；

* 构造函数中没有显示的 `return` 表达式，一般情况下，会隐式地返回 `this`，也就是新创建的对象，如果想要使用显式的返回值，则显式的返回值必须是对象，否则依然返回实例。

#### 5.1原型的规则

构造函数是用来创建实例的

``` js
// 步骤1：新建构造函数
function Person(name) {
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    }
}

// 步骤2：创建实例
var person = new Person('yang');
```

#### 5.2、原型的作用

1. 属性公用化：原型可以存储一些默认属性和方法，并且在各个不同的实例中可以共享使用；
2. 继承：在子类构造函数中借用父类构造函数，再通过原型来继承父类的原型属性和方法，模拟继承的效果；
3. 节省存储空间：结合第1点，公用的属性和方法多了，对应需要的存储空间也减少了。

``` js
// 第一步 新建构造函数
function Person(name) {
    this.name = name;
    this.age = 18;
    this.sayName = function() {
        console.log(this.name);
    }
}
// 第二步 创建实例 1
var person1 = new Person('1号');

// 第三步 创建实例2
var person2 = new Person('2号');

// 结果均为 true
person1.__proto__ === Person.prototype;
person2.__proto__ === Person.prototype; 

// 1号 2号
console.log(person1.name, person2.name);

// 18 18
console.log(person1.age, person2.age);
```

### 6、继承

概念：

通过某种方式，可以让某个对象访问到其他对象中的属性、方法，这种方式称之为继承。

背景：

有些对象会有方法，而这些方法都是函数（函数也是对象），如果把这些方法都放在构造函数中声明，则会产生内存浪费

注意：

js的继承都是建立在：方法在原型上创建、属性在实例上创建的前提下

#### 6.1实现继承的方式

##### 1、借助call

缺点：**这样写的时候子类虽然能够拿到父类的属性值， 但是问题是父类原型对象中一旦存在方法那么子类无法继承。**

```js
function Parents(age, live) {
    this.name = '借助call方式实现继承'
    this.age = age
    this.live = live
}
function Child() {
    Parents.call(this, ...arguments)
}
let child = new Child(18, true)

console.log('child: ', child)
```

##### 2、借助原型链

缺点：**改变实例的属性会影响到父类的属性，因为共用一个原型对象（引用类型）**

```js
function Parents1(age) {
    this.name = "借助原型链实现继承"
    this.age = age
}
function Child1() {
    this.type = 'Child1'
}
Child1.prototype = new Parents1()


let child1 = new Child1()

console.log("child1: ", child1.name)
```

##### 3、 将前两中组合（组合式继承）

缺点：**这种继承的问题 那就是Parent2的构造函数会多执行了一次（Child2.prototype = new Parent2();）**

``` js
function Parents2(age) {
    this.name = '借助组合式实现继承'
    this.age = age
    this.arr = [1, 2, 3]
}
function Child2() {
    this.type = 'Child2'
    Parents2.call(this, ...arguments)
}
Child2.prototype = new Parents2()

let child2 = new Child2(12)
let anthorChild2 = new Child2(13)
child2.arr.push(4)
console.log('child2: ', child2)
console.log('anthorChild2: ', anthorChild2)
```

##### 4、组合继承的优化

缺点：**子类实例的构造函数是Parent3，显然这是不对的，应该是Child3。**

``` js
function Parents3(age) {
    this.age = age
    this.name = '组合继承的优化1'
}
function Child3() {
    Parents.call(this, ...arguments)
    this.type = 'Child3'
}
// 这里让将父类原型对象直接给到子类，父类构造函数只执行一次，
// 而且父类属性和方法均能访问
Child2.prototype = Parents3.prototype
```

##### 5、寄生组合式继承

这是最推荐的一种方式， 接近完美的继承， 它的名字也叫做寄生组合继承。

``` js
function Parents4(age) {
    this.age = age
    this.name = '寄生组合式继承'
}
function Child4() {
    Parents.apply(this, [...arguments])
    this.type = 'Child4'
}
Child4.prototype = Object.create(Parents4.prototype)
Child4.prototype.constructor = Child4
```

##### 6、ES6的extends

它用的就是寄生组合式继承，但是加了一个Object.setPrototypeOf(subClass, superClass)
是用来继承父类的静态方法。这也是原来的继承方式疏忽掉的地方。

##### **扩展：面向对象继承的问题，无法决定继承哪些属性， 所有属性都得继承。**

### 7、闭包

函数嵌套函数      是自调用函数

内部函数可以访问外部函数的函数  外部函数无法方位外部函数的变量   

优点  可以避免全局变量的污染  

缺点 内存容易泄露