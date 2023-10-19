//the string is important topic because of its differents methods which is most important for project coding

const name = "jayesh"
//or
const myname = new String('Jayesh')   //object form
console.log(typeof name);

//for the differents methods you can simply refer the MDN documents for more methods

console.log(myname.length);
console.log(myname.charAt(2));
console.log(myname.split('-'));
console.log(myname.toUpperCase());



const demo = new String("The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?")
console.log(demo.replace('the',  'dinesh'));  //in this only a particular word is replaced
console.log(demo.replaceAll('monkey', 'jayesh'));

const extra = 'helloworld'
console.log(extra.indexOf('l'));   
console.log(extra.includes('w'), extra.toUpperCase());  //we ask to string for verify
console.log(extra.slice(-4));
