const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname,'../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'))



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
    crear: (req,res)=>{
        const productsFilePath = path.join(__dirname,'../data/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath));
        products.push(req.body);
        const newProducts = JSON.stringify(products);
        fs.writeFileSync(path.join(__dirname,'../data/products.json'),newProducts);
        res.redirect('/')
    },

    edit: (req,res)=>{
        let id = req.params.id;
        let product = products.find(product=>product.id==id);
        res.render('product-edit',{product});

    },
    update: (req,res)=>{
        let id = req.params.id;
        let product = products.find(product=>product.id==id);
        let productToEdit = {

            nombre :req.body.name,
            categoria :req.body.category,
            imagen: req.body.image,
            descripcion: req.body.description,
            precio: req.body.price
        }
        console.log(productUpdate);
        let newProduct = products.map(product=>{

            if(product.id==id){
                return product = {...productToEdit}
            }
            return products
        })
        
        res.redirect('/')

    }






}