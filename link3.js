function func1(){
/* demo 陣列
    var i;
    var cars = new Array();
    cars[0]= "benz";
    cars[1]= "porch";
    cars[2]="bmw";

    for (i = 0;i<cars.length;i++)
    {
    document.write(cars[i]+"<br>");
    }
 */   
/* demo 對象*/
var person=
    {firstname: "lin",
    lastname: 'jason',
    id:123   
    };
document.write(person.lastname+"<br>");//jason
document.write(person["lastname"]+"<br>");//jason
document.write(person[0]+"<br>"); //undefined
}

var btn = document.getElementById("button1");
btn.addEventListener("click",func1);