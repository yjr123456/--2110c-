//数组中包含的内容
interface ArrayItem{
    checked:boolean,
    id:number,
    value:string
}
type TodolistArray=Array<ArrayItem>

//获取ul标签
let ul: HTMLUListElement=document.getElementsByTagName("ul")[0];
//获取底部按钮
let all:HTMLElement | null =document.getElementById("all")
let deng:HTMLElement | null =document.getElementById("deng")
let wan:HTMLElement | null =document.getElementById("wan")
let clear:HTMLElement | null =document.getElementById("clear")

//定义新增数组
let todoArray:TodolistArray=[];

//定义数组自增Id
let nextid:number=1

//获取新增数据内容
function addTodolist(event: {keyCode: number; }){
    if(!event || event.keyCode===13){
        //获取input的内容
        //@ts-ignore
        let inputValue:string=document.getElementsByClassName("ne")[0].value;
        if(inputValue){
            circulation(inputValue);
            //@ts-ignore
            document.getElementsByClassName("ne")[0].value=''
        }
    }
}

//**
//  * 新增数据,并且保证数据id的唯一性

function circulation(inputValue: string) {
   // 首先获取ul标签
   // 存储数据,li标签的循环
   if (todoArray.length > 0) {
       nextid++
   }
   let addItemValue: ArrayItem = {
       checked: false,
       id: nextid,
       value: inputValue
   }
   todoArray.push(addItemValue)
   circulationHtml(todoArray);
}


/**
* 根据数据的变化进行生成html
*/
function circulationHtml(date: TodolistArray, checkId?: number) {
    console.log(date);
   // 清空原来的元素
   ul.innerHTML = ''
   date.forEach((item) => {
       // 创建li标签
       let li: HTMLLIElement = document.createElement("li");
       
       if(item.id == checkId && item.checked) {
           li.className = 'wan'
       } else if(item.checked) {
           li.className = 'need-completed'
       } else {
           li.className = ''
       }
       li.id = `${item.id}`
      
       if(item.id == checkId && item.checked) {}
       li.innerHTML = ` 
         <div class="li-style-div">
             <input type="checkbox" class="checkbox" id=${item.id} ${item.checked ? "checked" : null
           } onchange="changeCheckboxDate(this)" />
             <p class="li-style-div-content">${item.value}</p>
         </div>
         <button class= ${item.id == checkId && item.checked ? ' wan ' : item.checked ? "need-completed button-close " : "button-close"}  id=${item.id}  onclick=deleteDate(this)>X</button>
       `;
     
       ul.append(li)
   });
   changeLeftItem(date)
}

/**
* 删除
*/
function deleteDate(ele: ArrayItem) {
   todoArray = todoArray.filter(item => item.id != ele.id)
   circulationHtml(todoArray)
}

/**
* 选中的时候改变数据结构,并且添加样式
*/
function changeCheckboxDate(ele: ArrayItem) {
   todoArray.forEach(item => {
       if (item.id == ele.id) {
           item.checked = !item.checked
       }
   })
   circulationHtml(todoArray, ele.id)
}


/**
* 左下角条数的变化
*/
function changeLeftItem(data: TodolistArray) {
   let docuemnt: HTMLElement | null = document.getElementById('www')
   if (docuemnt) {
       docuemnt.innerText = data.length <= 0 ? '无事项' : data.length + '事项'
   }
}

/**
* 待完成的事项
* 获取待办事件,并且更新视图
*/
function dengdai() {
   let result: ArrayItem[] = todoArray.filter(item => !item.checked)
   circulationHtml(result)
   footerButton('deng')
}

/**
* 已完成
*/

function wancheng() {
   let result: ArrayItem[] = todoArray.filter((item: ArrayItem) => item.checked)
   circulationHtml(result)
   footerButton('wan')
}

/**
* 清空所有
*/

function clearAll() {
   todoArray = []
   ul.innerHTML = ''
   footerButton('clear')
}

/**
* 查看所有
*/
function suoyou() {
   circulationHtml(todoArray)
   footerButton('all')
}


/**
* 定义底部按钮接口类型
*/
interface ButtonArry {
   name: HTMLElement | null,
   key: string
}
/**
* 底部元素新增样式
*/

function footerButton(className: string): void {
   const buttonArry: Array<ButtonArry> = [
       {
           name: wan,
           key: "wan"
       },
       {
           name: all,
           key: "all"
       },
       {
           name: deng,
           key: "deng"
       },
       {
           name: clear,
           key: "clear"
       },
   ]
   buttonArry.forEach(item => {
       if (item && item.key === className) {
            //@ts-ignore
          item.name.classList.add('clickButton')
       } else {
            //@ts-ignore
           item.name.classList.remove('clickButton')
       }
   })
}
