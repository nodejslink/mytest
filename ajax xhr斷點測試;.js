var xhr=new XMLHttpRequest();
xhr.open('get','https://khh.travel/zh-tw/askme/all-regions?page=3');
xhr.send();
xhr.onload=function(){
    console.log(xhr.responseText);
}