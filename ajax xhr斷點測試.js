// ajax xhr斷點測試.js
//直接抓取對方網頁資料
//如遇到被CORS阻擋, 安裝google 擴充程式Allow-Control-Allow-Origin
var xhr=new XMLHttpRequest();
xhr.open('get','https://khh.travel/zh-tw/askme/all-regions?page=3');
xhr.send();
xhr.onload=function(){
    console.log(xhr.responseText);
}