const path = require('path');


module.exports={
    index: (req,res)=>{
        res.render('home2')
    },
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        res.render('register')
    },
    carrito: (req,res)=>{
        res.render('carrito')
    },
    detail: (req,res)=>{
        res.render('product-detail')
    },








}