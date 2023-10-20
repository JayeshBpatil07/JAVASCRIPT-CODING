
const newObj = {
    name:'jayesh',
    fullname:{first:'jayesh',last:'patil',rollno:10},
    email:'jay@gmail.com',
    Id:25,
    age:22,
    gender:'male'
}
console.log(newObj);
console.log(newObj.fullname.first);
console.log(newObj.hasOwnProperty('age'));    //for checking it is exit or not elements or property


let obj1 = {a:'2', b:'5'}
let obj2 ={c:'4',d:'6'}
let obj3 ={d:'7',e:'8'}

let obj4 = {obj1,obj2,obj3}
console.log(obj4);
// for to merge all elements in a single objedct
console.log(Object.assign({},obj1,obj2,obj3));   //all the data is stored in first {} tena jagavar dusara rahina tar tenama store hui data

obj4 = {...obj1,...obj2,...obj3}   //this is most usable in todays condition both in arrays and objects for containing all data in a single object or array
console.log(obj4);



//for accesing keys and values from specific object container which has more data in the form of array

const BigObj1 = [
    {
    name:'jay',
    age:'25',
    village:'bhilali',
    gender:'male'
},
  {
    name:'jayesh',
    age:'26',
    village:'bhilalilll',
    gender:'male'
},
 {
    name:'jay---',
    age:'27',
    village:'bhilali___',
    gender:'male'
},]

console.log(BigObj1[2].age);
console.log(Object.keys(BigObj1[0]));
console.log(Object.values(BigObj1[0]));
console.log(typeof BigObj1);