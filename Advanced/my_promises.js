
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Jayesh, is printed after 2 sec');
    },2000)

    let myArray = [1,2,3,4,5,6,7]
    if(myArray){
        console.log(myArray, 'this is my array');
        resolve()  //this is compulsory for exucting .then code of block
    }else{
        console.log('this is not my array');
        reject()  //this is compulsory for exucuting .catch code of block
    }
})
.then(function(){
    console.log('above code is resolved');       //Note = remeber   //.then and .catch both are imp after declaring promise above code(u can write it using .)
})
.catch(function(){                                  
    console.log('above code is rejected');
})



const promise2 = new Promise(function(resolve, reject){
    let myObj = {
        name: 'jayesh',
        email:'jay@jay.com',
        gender:'male',
        age: 22
    }
    if(myObj){
        console.log(myObj);
        resolve()
    }else{
        console.log('myObj throws error');
        reject()
    }
}).then(function(){
    console.log('myObj is resolved');
}).catch(function(){
    console.log('myObj is rejected');
})






const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
.then(function(){
    console.log('promisfive resolved');
})
.catch(function(){
    console.log('rejected promisfive');
})

//you can exucute above code also with async await fuction using try and catch block

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()