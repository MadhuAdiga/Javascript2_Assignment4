var employees=[]; //Declare an array
	employees.push({name: "Felipe J. Hodges",age:42,salary:3000,city:"Lemoyne",state:"NE", pin:69146}); //Push 5 objects into an array
	employees.push({name: "Susan D. Jimenez",age:44,salary:3500,city:"Kansas",state:"KS", pin:66215});
	employees.push({name: "Mary C. Merlino",age:38,salary:3200,city:"Wausau",state:"WI", pin:54401});
	employees.push({name: "Rickey C. Ingersoll",age:19,salary:1200,city:"Mutual",state:"MD", pin:20676});
	employees.push({name: "Pat M. Christenson",age:38,salary:2600,city:"Oakland",state:"CA", pin:94612});

employees.forEach (function(obt) //For each object in the array, output is printed in console
{
console.log(obt);
});