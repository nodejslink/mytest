/*
// ajax xhr斷點測試.js
//直接抓取對方網頁資料
//如遇到被CORS阻擋, 安裝google 擴充程式Allow-Control-Allow-Origin
var xhr=new XMLHttpRequest();
xhr.open('get','https://khh.travel/zh-tw/askme/all-regions?page=3');
xhr.send();
xhr.onload=function(){
    console.log(xhr.responseText);
}
*/
/*
//行內斷點
var num0=1;
num0=2;
num0=3;
num0=4;
num0=5;
num0=6;
function del(){
    num0 -= 1;
}
del();
del();
*/
//chrome 中修改code測試
var num1 = 0;
// if ('.btn1')
// btn1.addEventListener('click',function() {
    

 document.querySelector('.btn1').addEventListener('click',function()
 {
   num1 +=  100;
   document.getElementById('demo1').innerHTML= '計數=' + num1;
})