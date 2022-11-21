// console.log("linktest")
// let i = 1;
// for (let j=1;j<=5;j++ ){
// console.log(j)
// }
// while(i != 5){
//     console.log(i)
//     i++;
// }
// window.alert( 5+6 );


function linkfunc1(){
    window.alert( "進行innerhtml寫入" );
    document.getElementById("demo").innerHTML = "段落修改後";
   
}

function  showalert(){
    alert("hey function");
}
function secondfunc(){
    alert("hey second function");
}

// 2.使用DOM進行alert =>只能show出第2 function
let btn = document.getElementById("myButton");
btn.onclick = showalert;
btn.onclick = secondfunc;
// 3.使用addeventlistener進行alert =>可showe兩個function
let btn3 = document.getElementById("myButton");
btn3.addEventListener("click",showalert);
btn3.addEventListener("click",secondfunc);
//btn.removeEventListener("click",showalert);//刪除
//4.Event Object 
function func3(t){
    alert("查詢滑鼠座標");
   // alert('滑鼠座標 ${t.clientx} - ${t.clienty}');
   alert(`滑鼠座標:X:${t.clientX}-Y:${t.clientY}` );
   
    console.log(t);
     }
let btn1 = document.getElementById("myButton");
btn1.addEventListener("click",func3);
//嵌入涉及變數的表示式
let a = 5; b = 10;
console.log(`Sum of ${a} and ${b} is ${a + b}`);
let c = 20;
console.log(`Hello World ${ c }`);
// 字串變數
let op1 = 5, op2 = 10, operation = "Sum";
console.log("'%s' of %d and %d is %d.", operation, op1, op2, (op1 + op2));
//此段無法執行
// let sprintf = require('sprintf-js').sprintf;
// let op1 = 5, op2 = 10, operation = "Sum";
// sprintf('%s of %d and %d is %d.', operation, op1, op2, (op1 + op2));
