let a = 10
const b =15                    //this values are write in global scope
var c = 20

newfuction = function(){  
    let a = 11
    const b= 16                //this values are in the inner scope
    var c = 21   
//     console.log(a);
//     console.log(b);         this values shows the output of line 6,7,8
//     console.log(c);
}                              //this is act as a scope
newfuction()


console.log(a);
console.log(b)                 //this values shows output of  line 1,2,3
console.log(c);



//.................................................................
const num = 8

myfuction1(8)                           //we can access the fuction from here also
function myfuction1(nums){                 //this is direct simple fuction created so we can access the values from anywhere
    console.log(nums+1+num);
}
myfuction1(7)


// myfuction2()                   //this is problem we cannot access data before initializing
const myfuction2 = function(nums){         //this is the initializing fuction (variable storing)
    console.log(num+nums+2); 
}
myfuction2(2)                               



//.................this is best example of parent scope and child scope which scope is liable for access the data from each other......


function papa(){
    let myname = 'jayesh'
    // console.log(myname2);            but we cannot access our child scope data from nested scope
    

    function beta(){
        let myname2 ='jayu'
        console.log(myname);        //we can  access our parent scope from child nested scope
        console.log(myname2);
        }
    // papa()
    beta()
}
// beta()
papa()                            //this is imp line 



//................using if else .........

if(true){
    let myname = 'dinesh'

    if(myname==='dinesh'){
        let myname2 = 'dinu'
        console.log(myname2);        

    }
    console.log(myname);
    // console.log(myname2);                not applicable
}

// console.log(myname2);                    not applicable


