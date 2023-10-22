// IIFE => Immegiately Invoked Fuctions Expressions

// It is use for to prevent our scope with no garbage collection 
//in simple words wrap the whole fuction with the () and exucute with also ()  


//[1. using simple fuction]
(function one (){
    console.log('DB connected');
})();                        //this is most important when we use two IIFE in a same single file then they are separated using only ; semicolon


//[2. using arrow fuction]

(()=>{
    console.log("Db connected");
})();             // At the end if we not use semicolon ; then it does't work to next part




((name)=>{
    console.log(`my name is ${name}`);
})('jayesh patil')