'use strict'

let a = document.querySelector('.input1');
let b = document.querySelector('.input2');

let addBtn = document.querySelector('.add')
let subBtn = document.querySelector('.sub')
let divBtn = document.querySelector('.div')
let multBtn = document.querySelector('.mult') 

let result = document.querySelector('.result') 

let arr = [];

addBtn.addEventListener("click", () => {
    allFuncs("add", Number(a.value)+Number(b.value))
})
subBtn.addEventListener("click", () => {
    allFuncs("sub", Number(a.value)-Number(b.value))
})
divBtn.addEventListener("click", () => {
    allFuncs("div", Number(a.value)/Number(b.value))
})
multBtn.addEventListener("click", () => {
    allFuncs("mult", Number(a.value)*Number(b.value))
})

const allFuncs = (type, val) => {
    clearResult()
    stringFunc(type, val)
    displayResult(val)
    displayArr()
}

const clearResult = () => {
    let val = document.querySelector(".result");
    if (val.hasChildNodes()) {
        val.removeChild(val.childNodes[0]);
    }
}

const stringFunc = (method, val) => {
    let type = "+"
    if(method === "add") type = "+"
    else if(method === "sub") type = "-"
    else if(method === "div") type = "/"
    else type = "*" 
    let str = `${a.value} ${type} ${b.value} = ${val}`
    arr.push(str);
}

const displayResult = (val) => {
    const result = document.createElement("h2");
    const node = document.createTextNode(val);
    result.append(node)
    const element = document.querySelector(".result");
    element.append(result);
}

const displayArr = () => {
    let item = arr[arr.length-1]
    const para = document.createElement("li");
    const node = document.createTextNode(item);
    para.append(node);
    const element = document.querySelector(".arrList");
    element.prepend(para);
}