const score = 100
console.log(score);

const anotherscore = new Number(500)
console.log(anotherscore);
console.log(anotherscore.toString().length);
console.log(anotherscore.toFixed(5));    //it is uses when we need to show decimal points value in our output

const otherNum = 125.452455412
console.log(otherNum.toPrecision(4));  //it shows when we need how many output value in approximately manneer
console.log(otherNum.toExponential());


const morenumbers = 10000000000000
console.log(morenumbers.toLocaleString('en-IN'));


//..........................MATHS..............................//

console.log(Math)

console.log(Math.abs(-4))   //negative data convert into postive
console.log(Math.round(4.6));  // shows a approximate value
console.log(Math.floor(4.9));   //shows output only fisrt fix (before decimal point) value
console.log(Math.min(5,79,57,3,8,6));
console.log(Math.max(5,79,6,50,57,99));

console.log(Math.random());
console.log(Math.random()*10); //shwos values between 0 to 10 randomly
console.log(Math.random()*100 +9);  //it shows value abobe 9 only  in three digit randomly
console.log(Math.floor(Math.random()*1000)+1); 


//imp

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //formula