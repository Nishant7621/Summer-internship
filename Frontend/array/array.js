let city = ["mumbai","bhopal","indore","delhi"];
for(let i=0;i<city.length;i++)
{
    console.log(city[i]);
}

// let marks=[90,80,40,20];
// console.log(marks);

// for(let cities of city) {
//     console.log(cities);
// }

// for(let cities of city) {
//     console.log(cities.toUpperCase());
// }


// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// let avg = sum/marks.length;
// console.log("avg of class marks",avg);




// let price = [250,645,300,900,50];
// let sum = 0;
// for(let val of price){
//     sum=sum+val-val/10 ;
// }
// console.log(sum);




// let marks=[90,80,40,20];
// let price = [250,645,300,900,50];
// let combine = marks.concat(price);   //joins multiple array concat method
// console.log(combine);



let company = ["tcs","ibm","infosys","wipro"];
company.shift();
// // company.splice(2,0,"netlink");
// company.push("amazon");



let colors = ["Red", "Blue", "Green"];

colors.forEach((color, index) => {
    console.log(index + ": " + color);
});



