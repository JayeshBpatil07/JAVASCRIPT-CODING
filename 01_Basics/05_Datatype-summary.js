// there are two types of datatypes in javascript 1.pritmitive type and 2. non primitive type(reference type)


// 1. primitive type

// String 
let Myname = 'jayesh'

//Number
let score = 100.5

//Boolean
let IsLoggedIn = false

//Null
let temptureIs = null

//Undefined
let mySchoolName;

//BigInt
let StockMarketIndex = 461394613025238465798n

//Symbol    use in when uniqueness propety comes in our project
let UserId = Symbol('456')
let anoterId = Symbol('456')
console.log(UserId===anoterId);

console.log(typeof IsLoggedIn);  //you can check every datatype type





//2. Non primitive datatypes

//Arrays

let My_marks = [4,5,78,9,23,54]

//objects
let myInfo = {
    name:"Jayesh",
    age:22,
    village:'Bhilali',
}

//fuction

 let myFuct= function() {
    console.log('hello jayesh');
}
console.log(myFuct, myInfo, My_marks);

console.log(typeof myFuct);