
// function linkfunc1(){
//     window.alert( "進行innerhtml寫入" );
//     document.getElementById("demo").innerHTML = "段落修改後";
   
// }

function linkfunc1(){
    // document.getElementById("demo").innerHTML = 123E5;
    // document.getElementById("demo").innerHTML = 5*10;
 
    //置換文字
    document.getElementById("demo").innerHTML =[40, 100, 1, 5, 25, 10];

    // for(var a=0;a<cars.length ;a++)
    // {
    //     document.write(a +"<br>")
    // }
    //test2
    // var i=2,len=5; //cars.length
    // for(;i<len;i++)
    // {
    //     //document.write(cars[i]+"<br>");
    //     document.write(i+"<br>");

    // 3
//     for (var i=0,len=10; i<len; i++)
// { 
//     document.write(i+"<br>");
// }
// //4
// var x;
// var txt = "";
// var person={fname:"Bill",lname:"gates",age:56};
// for (x in person)//
// {
//      txt = txt + " " + person[x] ;
//     document.write( txt + "<br>");
// }
 //5 99乖法
 
 document.write("<h1>九九乘法演示</h1>")
 var a = [1,2,3,4,5,6,7,8,9,10]; 
 var b = [1,2,3,4,5,6,7,8,9,10];
 var txt = "";
 for(x in a){
    for(y in b){
        txt = x + "*" + y + "=" + (x*y);
        if (x*y != 0 ) {
            document.write(txt+"<br>");
        }
        
    }
 }

}
let btn = document.getElementById("btn1");
btn.addEventListener("click",linkfunc1);

document.write(" <br>折行\
測試");

