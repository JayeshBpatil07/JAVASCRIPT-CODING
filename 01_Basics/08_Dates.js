const myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());   //it shows date with day
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());   //it shows exat date with exat timing
console.log(Math.floor(myDate.getMilliseconds()));


const MycreatedDate = new Date(10,0,25,4,45,50,254.65336)
console.log(MycreatedDate);   //not readiable format
console.log(MycreatedDate.getDate());  //shwos date we created
console.log(MycreatedDate.toLocaleString()); 
console.log((MycreatedDate.getMinutes()));
console.log(Math.floor(MycreatedDate.getMilliseconds()));
console.log(MycreatedDate.getSeconds());