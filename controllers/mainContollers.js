const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname,'../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'))



module.exports={
    index: (req,res)=>{
        //let id = req.params.id;
        res.render('home', {productos: products}); //el de la derecha es products de json, 
        //el de la izquierda es el alias con el que lo llamamos desde la vista. 
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
        let id = req.params.id;
        let product = products.find(product=>product.id==id);
        res.render('product-detail', {product});
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
            id,
            estilo: req.body.estilo,
            marca: req.body.marca,
            nombre :req.body.name,
            categoria :req.body.category,
            imagen: req.body.imagen,
            descripcion: req.body.description,
            precio: req.body.price
        }
        
        let newProducts = products.map(product=>{

            if(product.id==id){
                return product = {...productToEdit}
            }
            return product
        })
        
        fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(newProducts));
        
        res.redirect('/')

    },
    delete: (req,res)=>{
        let id = req.params.id;
        let indice = products.findIndex(product=>product.id==id);
        
        if (indice => 0) {
            products.splice(indice, 1)
        }

    },



}