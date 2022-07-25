//原型和继承
function Anmation(){
    this.name="Dog",
    this.SayHi=function(){
        console.log("我是继承函数");
    }
}
Anmation.prototype.age="13"
Anmation.prototype.Task=function(){
    console.log("我在呼叫");
}
let cat=new Anmation("Cat")
cat.prototype.Niao=function(){
    console.log("我是实例函数创建的对象");
}
console.log(cat.name);
console.log(cat.SayHi);
console.log(cat.age);
console.log(cat.Task);
console.log(cat.Niao);
console.log(cat);
console.log(Anmation);