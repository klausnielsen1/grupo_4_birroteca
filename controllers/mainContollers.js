const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname,'../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));


module.exports={
    index: (req,res)=>{
        res.render('home')
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
    product: (req,res)=>{
        res.render('admin-product')
    },
    create: (req,res)=>{
        res.render('product-create')
    },
    edit: (req,res)=>{
        let id = req.params.id;
        let product = products.find(product=>product.id==id);
        res.render('product-edit',{product});

    }







}