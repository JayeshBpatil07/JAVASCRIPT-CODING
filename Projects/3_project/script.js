const clock = document.querySelector('.clock')
// const clock = document.getElementsByClassName('.clock')   //you can select class by this type also

setInterval(function(){
    let date =  new Date();
    // console.log(date.toLocaleTimeString);     //this shows in inspect
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)      //after 2 sec time is changes