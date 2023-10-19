// in this file we studied about how we convert the datatypes from one form to another datatypes| and also check its original form of datatypes

// [1]...................................................
Myname = "jayesh"  //inbuilt is a string
console.log(typeof Myname);
//now we convert it into a number

convertToNumber = Number(Myname) //how to change in number of using only (Number)
console.log(convertToNumber);  // shows its original logical output
console.log(typeof convertToNumber); //shows we have to force it to change in number form
//..............................................................................

//[2]...........................................................................

 const age = 22  //inbuilt is a number
console.log(typeof age);
//now we convert it into another form of datatype
convertToString = String(age)
convertToBoolean = Boolean(age)
convertToNull = null
console.table([convertToString, convertToBoolean, convertToNull]);
console.log(typeof convertToBoolean);  // you can check every variable type of its original datatype


// [3]...............................................................

const yourvillage = "Bhilali"
console.log(typeof yourvillage);

convertToBoolean = Boolean(yourvillage)
console.log(convertToBoolean);








// oprations

let marks = 5
 const outptmarks = -marks
console.log(outptmarks);


let a= 5
let b= 5

let c= a+b
let d = a-b
let e = a*b
let f = a%b
let g = a/b

console.log(c, d, e, f, g);

console.log(2+5*5-4);






// prefix opration


let x = 5
let y = ++x
// expected output is x=6 and y 6
// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
console.log(`x is:${x} and y is:${y}`);


// postfix operation

let m = 7
let n = m++
//expected output is m=8 and n=7
// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
console.log(`m is:${m} and n is:${n}`);