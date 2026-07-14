// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('Hello page')
//     }
//     if(req.url==='/about'){
//         res.end('Hello about page')
//     }
// });
// server.listen(3000);


// const express=require('express');
// const app=express();

// app.get('/',(req,res)=>{
//     res.send('Home page');
// })

// app.get('/about',(req,res)=>{
//     res.send('about page');
// })

// app.get('/contact',(req,res)=>{
//     res.send('contact page');
// })

// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
// });


const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});