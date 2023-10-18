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