//external display

//arrays
var animal=["rabit", "tiger", "lion", "dog"];
var no= [1,2,3,4,5,"raja",43];
no.push("ram");

console.log(no);

//for loop

for(i=1; i<9; i+=2 )
	console.log(i);

//while loop
var a= 101;
while(a<=105)
{
	console.log(a);
	a++;
}

//if condition
var a1=10;
if (a1==12)
{
    console.log(true);
}
else 
{
	 console.log(false);
}

//switch case:
var color = "white";
switch (color){
	case "red": console.log("this is red");
	break;
	case "yellow": console.log("this is yellow");
	break;
	case "white": console.log("this is white");
	break;
	default:alert("please select any color");
    break;
}

// object
var name1 = {
    fname :"jeno",
    lname : "joy",
    age : 23
}
  console.log(name1.age);
//alert(no.length);