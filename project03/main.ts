// arithemathic operator
// In class sir told an example of party given by someone and what quantity things need 
console.log("arithematic operator");
console.log("Start");
let numberOfFaculty = 4 ;
let numberOfManagement = 3;
let numberOfAbsentFaculty = 2;
let numberOfTotalFaculty = numberOfFaculty *21
console.log("numberoftotalfaculty")
console.log(numberOfTotalFaculty);
console.log("Total")
console.log(numberOfFaculty+numberOfManagement-numberOfAbsentFaculty);
console.log("first addition")
let all = numberOfFaculty+numberOfManagement
console.log(all);
console.log("than subtraction")
console.log(all - numberOfAbsentFaculty);
console.log("Totalnumberofkg");
let totalnumerOfKgs = 30;
console.log(totalnumerOfKgs);
let givenToEveryone = totalnumerOfKgs/numberOfTotalFaculty;
console.log(givenToEveryone);
console.log("End")

// unery operator
console.log("Unery Operator")
console.log("Start")
let num1 = 5;
let num2 = 5;
++num1;
--num2;
console.log(num1);
console.log(num2);
let i = 10;
//           11    12    6   11 - 2
let result = ++i + ++i + 6 + --i - 2 ;
console.log(result);
console.log("end")

//bmi
console.log("BMI")
console.log("start")
let weightInKg = 70;
let heightInMeters = 1.75 ;
let bmi = weightInKg / (heightInMeters*heightInMeters);
console.log(`your bms is ${bmi}`);
console.log("end");

//template liternals
console.log("template liternals");
console.log("start");
let firstName: string = "Sahil";
let lastName: string = "Kumar";
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);
console.log("end");

// assigment operator
console.log("aaigment operators");
console.log("start");
let c = 10;
c += 5;
console.log(c);
console.log("end")

//comparison operators
console.log("comparsion operators")
console.log("start")
let numb1:number = 5;
let numb2:number = 2;
console.log(numb1 == numb2);
console.log(numb1 != numb2)
console.log(numb1 > numb2)
console.log(numb1 < numb2)
console.log("end")