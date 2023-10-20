// [1]...simple fuction represent
const SaymyName = function(){
    console.log('jayesh');
    console.log('patil');
}
SaymyName  //not shows output 
SaymyName()


//[2]...how to pass parameters and arguments in fuctions
const UserLoggeIn = function(num1,num2){
    let sum = num1+num2
    return(sum)         //after return there is no meaning of code in specific fuction   (final step..)
}
console.log(UserLoggeIn(4,5))

//[3]....
const UserLoggeIn1 = function(nameofuser){
     console.log(nameofuser)
     return
}
UserLoggeIn1('jayesh')

//[4]...
const antrfuctin = function(username='patilll'){
    if(!username){
        console.log('plese enter the username');
        return
    }else{
        return(`${username} log in`)
    }
}
antrfuctin()             // if user not fill name this shows
console.log(antrfuctin('jayu'));   //if user fill their name then this print
console.log(antrfuctin());   //we can by defaultly set the username also (see the by default name of user if they dont want to fill name (parameter check patillll))





//how to push or access object into fuction
myobj ={
    name:'jayesh',
    age:22,                 //this object which we access the data 
    genger:'male'
}
function myfuction(getanyobject){
    console.log(`my name is ${getanyobject.name} and I am ${getanyobject.age} old`)
}
myfuction(myobj)
myfuction({
    name:'dinesh',        //this object is provided by me  we can directly add the object as a arguments
    age:21,
})



//how to push or access Arrays into or from the fuction

myArray =[1,2,3,4,56,8,'ishu']

function mynewfuction(getanyarray){
    console.log(`this is myArray__${getanyarray}`);

}
mynewfuction(myArray[2])
mynewfuction([4,5,6,7,8,9])

