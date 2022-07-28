var tbody = document.getElementsByTagName("tbody")[0];
var span = document.getElementsByTagName("span")[0];
var span1 = document.getElementsByTagName("span")[1];
var arrays = [
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
];
var array = arrays;
var shopid = true; //商品id
var shopjg = true; //商品价格
//渲染
function xuan(arr) {
    tbody.innerHTML = '';
    arr.forEach(function (ele) {
        var tr = document.createElement("tr");
        tr.innerHTML = "\n         <td>".concat(ele.id, "</td>\n         <td>").concat(ele.goods_name, "</td>\n         <td>").concat(ele.price, "</td>\n        ");
        tbody.appendChild(tr);
    });
    span.innerHTML = String(array.length);
    //每页显示几条数据
    var numlist = document.getElementsByTagName("input")[1];
    //当前页数
    var dolist = Number(Math.ceil(array.length / Number(numlist.value)));
    span1.innerHTML = '';
    for (var i = 0; i < dolist; i++) {
        var span_1 = document.createElement("span");
        span_1.innerHTML = "\n        <button onclick=\"go(this)\">".concat(String(i + 1), "</button>\n        ");
        span1.appendChild(span_1);
    }
}
xuan(array);
//id排序
function dao(ele) {
    if (shopid) {
        array.sort(function (a, b) {
            return b.id - a.id;
        });
        ele.innerHTML = "正序";
        shopid = false;
    }
    else {
        array.sort(function (a, b) {
            return a.id - b.id;
        });
        ele.innerHTML = "倒序";
        shopid = true;
    }
    xuan(array);
}
//价格排序
function zheng(ele) {
    if (shopjg) {
        array.sort(function (a, b) {
            return b.price - a.price;
        });
        ele.innerHTML = "正序";
        shopjg = false;
    }
    else {
        array.sort(function (a, b) {
            return a.price - b.price;
        });
        ele.innerHTML = "倒序";
        shopjg = true;
    }
    xuan(array);
}
//搜索
function sou(ele) {
    var val = ele.value;
    var arr = array.filter(function (ele) {
        return ele.goods_name.includes(val);
    });
    xuan(arr);
}
//分页按钮的渲染
function xian(ele) {
    if (ele.value != '') {
        //当前页数
        var dolist = Number(Math.ceil(array.length / Number(ele.value)));
        span1.innerHTML = '';
        for (var i = 0; i < dolist; i++) {
            var span_2 = document.createElement("span");
            span_2.innerHTML = "\n        <button onclick=\"go(this)\">".concat(String(i + 1), "</button>\n        ");
            span1.appendChild(span_2);
        }
        //每页显示几条数据
        var numlist = document.getElementsByTagName("input")[1];
        var btn = document.getElementsByTagName("button")[2];
        var ksindex = (Number(btn.innerHTML.trim()) - 1) * Number(numlist.value);
        var jkindex = Number(btn.innerHTML.trim()) * Number(numlist.value);
        var arr = arrays.slice(ksindex, jkindex);
        xuan(arr);
    }
    if (Number(ele.value) > 10) {
        ele.value = "10";
    }
    if (Number(ele.value) < 1) {
        ele.value = "1";
    }
}
//点击分页按钮
function go(ele) {
    var numlist = document.getElementsByTagName("input")[1];
    // let btn:HTMLButtonElement=document.getElementsByTagName("button")[2]
    var ksindex = (Number(ele.innerHTML.trim()) - 1) * Number(numlist.value);
    var jkindex = Number(ele.innerHTML.trim()) * Number(numlist.value);
    var arr = arrays.slice(ksindex, jkindex);
    xuan(arr);
}
