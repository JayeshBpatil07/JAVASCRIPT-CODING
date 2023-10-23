//simple if else condition

const score = 100

if (score===100) {
    console.log('true');
} else {
    console.log('not');
}


//nested if else condition

const userLoggedIn = true
const userLoggedOUt = true                   //we already assign the values
const myMarks = 500

if(!userLoggedIn){
    console.log('user is successfully logged in');
}else if(userLoggedOUt || !userLoggedIn){
    console.log('user is Logout');
}else{
    console.log('above code is wrong');
}