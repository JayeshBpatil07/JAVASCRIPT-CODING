// //generate random color

// const randomColor = function () {
//   const hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// let intervlId;

// const startChangingColor = function () {
// if(!intervlId){
//     intervlId = setInterval(changeBgcolor, 1000);
// }
//     function changeBgcolor(){
//         document.body.style.backgroundColor = randomColor()
//     }
// };

// const stopchangingColor = function(){
//     clearInterval(intervlId)
//     intervlId = null
// }

// document.querySelector(".start").addEventListener("click", startChangingColor); //fuction of changeBgcolor is already made above so no need to create here

// document.querySelector('.stop').addEventListener('click', stopchangingColor)










//for generate random color  using for loop

const randomColor = function(){
 const hex = '012345678ABCDEFG'
  let color = '#'
  for (let i = 0; i <6; i++) {
    color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let setIntervalId;

const changeBgcolor = function(){
  document.body.style.backgroundColor = randomColor()
}

const startChangingColor = function(){
  if(!setIntervalId){
    setIntervalId = setInterval(changeBgcolor, 100)

  }
}

const stopchangingColor = function(){
  clearInterval(setIntervalId)
  setIntervalId = null
}

document.querySelector('.start').addEventListener('click', startChangingColor)
document.querySelector('.stop').addEventListener('click', stopchangingColor)