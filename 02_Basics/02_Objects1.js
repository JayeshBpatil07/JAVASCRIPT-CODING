
const mysymbol = Symbol('hello')
const myArr = [2,5,8,9,83]

const myobj = {
    name:'Jayesh',
    age:22,
    email:'jay@jay.com',
    gender:'male',
    [mysymbol]:'world',    //[] is importance for unique values
    [myArr]:'kkkk',
    myArr
}
console.log(myobj);
console.log(myobj['email']); //this form for geting output is best as compared to others
console.log(myobj.email);
console.log(myobj[mysymbol]);
console.log(myobj[myArr]);
console.log(myobj.myArr);




 myobj.greetings = function(){
    console.log('hello jayesh patil');
}
console.log(myobj.greetings())

myobj.greetingstwo = function(){
    console.log(`hello js user := ${this.name}`);   //for accesing the properties from same object we use (this)
}
myobj.greetingstwo()