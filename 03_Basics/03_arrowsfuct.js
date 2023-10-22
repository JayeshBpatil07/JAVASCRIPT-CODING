
//........
    let myobj1={
        name:'jayu',
        age:25,
        email:'jay@jay.com',
        welcomeMessage: function() {
            console.log(`${this.name}, welcome to our website`);
        }
    }
    console.log(myobj1);
    myobj1.welcomeMessage()    

// console.log(two(myobj1));             //throw error becuse it is out of sub scope






// ...............................................................New Arrow Fuction ES6(JS)......................................//

//[1]
myArrowfunc = () =>{
    console.log('hello world');
}
myArrowfunc()

//[2]
myArrowfunc1 = (num1 , num2)=>{    //this is normal arrow fuction
   let myobj= {
        name:'jayesh_patil',
        age:22
    }
    total = num1+num2
    console.log(total, myobj);}
myArrowfunc1(5,5)

//[3]......above another form
myArrowfunc2 =(num3, num4) => (num3+num4) //note:if we use one line arrow fun. then there is no need of {}  use only()..btw, u use ({}) this type
console.log(myArrowfunc2(10, 10));

