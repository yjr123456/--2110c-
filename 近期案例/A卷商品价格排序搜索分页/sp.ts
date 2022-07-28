let tbody:HTMLTableSectionElement=document.getElementsByTagName("tbody")[0]
let span:HTMLSpanElement=document.getElementsByTagName("span")[0]
let span1:HTMLSpanElement=document.getElementsByTagName("span")[1]
interface Shangpin{
    id:number,
    goods_name:string,
    price:number
}
let Arrays:Array<Shangpin>=[
      {
        "id": 1,
        "goods_name": "vivo 手机 p30",
        "price": 1242
      },
      {
        "id": 2,
        "goods_name": "苹果手机 iphone plus",
        "price": 45000
      },
      {
        "id": 3,
        "goods_name": "宝马 X7 4驱",
        "price": 750000
      },
      {
        "id": 4,
        "goods_name": "宝马 5系 2驱",
        "price": 450000
      },
      {
        "id": 5,
        "goods_name": "锤子手机 200G",
        "price": 2000
      },
      {
        "id": 6,
        "goods_name": "华为手机 P40",
        "price": 5000
      },
      {
        "id": 7,
        "goods_name": "红米 手机",
        "price": 1200
      },
      {
        "id": 8,
        "goods_name": "海尔电冰箱 3匹",
        "price": 980
      },
      {
        "id": 9,
        "goods_name": "苹果笔记本电脑 i9",
        "price": 20000
      },
      {
        "id": 10,
        "goods_name": "精品手机 华为 200G",
        "price": 3200
      }
]
let array:Array<Shangpin>=Arrays
let shopid:boolean=true//商品id
let shopjg:boolean=true//商品价格

//渲染
function xuan(arr:Array<Shangpin>){
    tbody.innerHTML=''
    arr.forEach(ele=>{
      let tr=document.createElement("tr")
        tr.innerHTML=`
         <td>${ele.id}</td>
         <td>${ele.goods_name}</td>
         <td>${ele.price}</td>
        `
       tbody.appendChild(tr)
    });
    span.innerHTML=String(array.length)
    //每页显示几条数据
    let numlist:HTMLInputElement=document.getElementsByTagName("input")[1]
    //当前页数
    let dolist:number=Number(Math.ceil(array.length/Number(numlist.value)))
    span1.innerHTML=''
    for (let i = 0; i < dolist; i++) {
         let  span=document.createElement("span")
        span.innerHTML=`
        <button onclick="go(this)">${String(i+1)}</button>
        `
        span1.appendChild(span)
    }
}
xuan(array)

//id排序
function dao(ele:HTMLButtonElement){
    if(shopid){
        array.sort(function(a,b){
            return b.id-a.id
        })
        ele.innerHTML="正序"
        shopid=false
    }else{
        array.sort(function(a,b){
            return a.id-b.id
        })
        ele.innerHTML="倒序"
        shopid=true
    }
    xuan(array)
}
//价格排序
function zheng(ele:HTMLButtonElement){
    if(shopjg){
        array.sort(function(a,b){
            return b.price-a.price
        })
        ele.innerHTML="正序"
        shopjg=false
    }else{
        array.sort(function(a,b){
            return a.price-b.price
        })
        ele.innerHTML="倒序"
        shopjg=true
    }
    xuan(array)
}
//搜索
function sou(ele:HTMLInputElement){
    let val=ele.value
    var arr=array.filter(ele=>{
        return ele.goods_name.includes(val)
    })
    xuan(arr)
}
//分页按钮的渲染
function xian(ele:HTMLInputElement){
    if(ele.value!=''){
        //当前页数
    let dolist:number=Number(Math.ceil(array.length/Number(ele.value)))
    span1.innerHTML=''
    for (let i = 0; i < dolist; i++) {
         let  span=document.createElement("span")
        span.innerHTML=`
        <button onclick="go(this)">${String(i+1)}</button>
        `
        span1.appendChild(span)
    }
    //每页显示几条数据
    let numlist:HTMLInputElement=document.getElementsByTagName("input")[1]
    let btn:HTMLButtonElement=document.getElementsByTagName("button")[2]
    let ksindex=(Number(btn.innerHTML.trim())-1)*Number(numlist.value)
    let jkindex=Number(btn.innerHTML.trim())*Number(numlist.value)
    let arr=Arrays.slice(ksindex,jkindex)
    xuan(arr)
  }
  if(Number(ele.value)>10){
      ele.value="10"
  }
  if(Number(ele.value)<1){
      ele.value="1"
  }
}
//点击分页按钮
function go(ele:HTMLButtonElement){
    let numlist:HTMLInputElement=document.getElementsByTagName("input")[1]
    // let btn:HTMLButtonElement=document.getElementsByTagName("button")[2]
    let ksindex=(Number(ele.innerHTML.trim())-1)*Number(numlist.value)
    let jkindex=Number(ele.innerHTML.trim())*Number(numlist.value)
    let arr=Arrays.slice(ksindex,jkindex)
    xuan(arr)
}