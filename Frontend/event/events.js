let btn1=document.querySelector(".btn");
let body=document.querySelector("body")
// btn1.addEventListener("click",()=>{
//     body.classList.toggle("Dark")
//     if(body.classList.contains('Dark')){
//         btn1.innerHTML='Light'
//     }else{
//         btn1.innerHTML='Dark'
//     }
// })

let imgsrc="https://w7.pngwing.com/pngs/71/31/png-transparent-cockroach-insect-cockroach-animals-arthropod-invertebrate-thumbnail.png"
btn1.addEventListener("click",() =>{
    let img=document.createElement("img")
    img.src= imgsrc

    let top=Math.floor(Math.random()*80)
    let left=Math.floor(Math.random()*80)

    img.style.position = 'absolute'
    img.style.top=`${top}%`
    img.style.left=`${left}%`

    body.appendChild(img)


})


















// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// }



// btn1.onclick=(evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }
// btn1.addEventListener("click",(evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
// });
// btn1.addEventListener("click",() => {
//     console.log("button1 was clicked -");
// });
// let div=document.querySelector("div");


