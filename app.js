const express=require('express');
const app=express();
const path=require('path');

let PORT = 3001;
app.use(express.static("public"));
app.listen(PORT,()=>console.log("sevidor funcionando en el servidor"+PORT))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})

app.get('/product',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/product-detail.html'))
})
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})


