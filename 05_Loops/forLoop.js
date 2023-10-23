// this is the basic example for printing the numbers 0 to 10 with for loop
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(index);
}


//using array

let myArray = ['jayesh', 'dinesh', 'manoj', 'gopal','jaggunana']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    // console.log(`my array is ${i} with name ${myArray[0]}`);
}

//
for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log('this is table of ', i);
    for (let j =1; j <=10; j++) {
        const element = j;
        // console.log(`inner loop  ${j} with outer loop ${i}`);
        console.log(` ${i} * ${j} = ${i*j}`);
    }
    
}


//using if else in for loop

for (let i = 0; i <10; i++) {
    const element =i;
    if(i==5){
        console.log('this is using if ');
    }
    console.log(element);
    
}



//using Break and Continue in for loop  (u can use switch case also)

for (let jayesh = 1; jayesh <= 20; jayesh++) {
    // console.log(jayesh)
    if(jayesh==5){
        console.log('this is 5');
        // break              // using this break the code is stop at the 5 it can't move to next part
        continue           //using this continue it ignores that line condition and move to the next part
    }
    console.log(jayesh);
}
