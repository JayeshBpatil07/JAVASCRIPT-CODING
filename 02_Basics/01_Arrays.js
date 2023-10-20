//simple form to declare array
const myArr = [5,6,"jayesh",55,78]
console.log(myArr);

//new form of array declartion

let myarr1 =  new Array(2,4,89,'jay',23)   //In this type of declartion there is no need to use []
console.log(myarr1);
console.log(typeof myarr1);
console.log(myarr1.toLocaleString());


//concat use
let a = [4,5,6,7]
let b = [9,8,7,2]
let c = console.log(a.concat(b));;


const newArr = new Array('J', 'Y', 'S',2,5,8)
console.log(newArr.length);
console.log(newArr.unshift(4));


console.log(newArr.join(myarr1));
console.log(newArr.includes(1));
//slice and splice
console.log(newArr.slice(3));   //it shows the value after the 3 indices only =>2,5,8    the numbering start from 1  (in simple words it ignore fisrt part of array)
console.log(newArr.slice(2,5));

console.log(newArr.splice(8));
console.log(newArr.splice(2,5));


//push and pop
const arry1 = ['jay','shiv', 'ray']
let pushvalue = arry1.push('patil')
console.log(pushvalue);
console.log(arry1);       

let popvalue = arry1.pop('patil')
console.log(popvalue)
console.log(arry1); //for checking original changes run original variable
