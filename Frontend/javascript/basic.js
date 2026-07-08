// const profile = {
//     username: "@nishant",
//     isFollow: false,
//     followers: 10,
//     following: 56
// };
// console.log(typeof profile["username"]);



// let gamenum = 5;
// let usernum = prompt("enter the game number");
// while(usernum != gamenum) {
//     usernum=prompt("you entered wrong game number ,Guess again");
// }
// console.log("you entered right game number");


// let obj = {
//     item: "pen",
//     price:10
// };
// let output = "the cost of ${obj.item} is ${obj.price}";
// console.log(output);


// let str= "   nishant jha   "
// console.log(str.trim());


// let str = "Nish";
// str=str.replace("i","u");
// console.log(str);


let userData={
    "first Name":"Nishant",
    "roll no":231951,
    mobile_no:987654321,
    adress:{
        city:"Bhopal",
        state:"MP"
    },
    fun(){
        console.log("hello" + this.adress.city)
    }
};
// console.log(userData["first Name"]);       //bracket method  prevent space error in key
// console.log(userData.mobile_no);           //dot notation


// delete userData["roll no"];

// console.log(userData);
// userData.fun() ;

// let copyData={...userData}
// copyData.mobile_no=9875432
// copyData.adress.city="pune"
// copyData.adress.state="mh"

// console.log(copyData)


// function print(...numbers){
//     numbers.forEach((val,idx)=>{
//         console.log(val,"==>",idx);
//     })
// }

// print(10,20,30,40,50)


// let val=Math.floor(Math.random()*(200-100)+100)
// console.log(val);


// let name="Nish"
// let greet=`hello im ${name}`                 // dynamic allocation   //templete literals
// console.log(greet)

// let userData={
//     "firstName":"Nishant",
//     rollno:231951,
//     mobile_no:987654321,
// }
// let {firstName}=userData               // destructuring
// console.log(firstName)

// for(const key in userData){
//     console.log(key,": ",userData[`${key}`]);
// }


// function fun(){
//     let a=10
//     let b=20

//     function sum(){
//         console.log(a+b);
//     }
//     return sum
// }

// let returnfun=fun()
// returnfun()


// function fun(){
//     let a = 10;
//     let b = 20;

//     function sum(){
//         console.log(a + b);
//     }

//     return sum;
// }

// let returnfun = fun();
// returnfun();