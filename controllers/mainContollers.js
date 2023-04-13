const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname,'../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));

const db= require ('../database/models');
const sequelize =db.sequelize;
const {Op} = require('sequelize');

//Para llamar a los modelos con otro nombre 
const producto = db.Producto; 




module.exports={
    index: (req,res)=>{
        //let id = req.params.id;
        res.render('home', {productos: products}); //el de la derecha es products de json, 
        //el de la izquierda es el alias con el que lo llamamos desde la vista. 
    },
    add: (req,res)=>{
        res.render('product-create')
    },
    create: (req,res)=>{
        let productCreate = {
            nombre: req.body.name,
            category: req.body.category,
            imagen:req.file.filename,
            descripcion: req.body.description,
            precio:req.body.price
        } 
        console.log(productCreate)   
        producto.create(productCreate)
            .then(producto=>{
                res.redirect('/')
            })
        
        
        
        // const productsFilePath = path.join(__dirname,'../data/products.json');
        // const products = JSON.parse(fs.readFileSync(productsFilePath));
        // products.push(req.body);
        // const newProducts = JSON.stringify(products);
        // fs.writeFileSync(path.join(__dirname,'../data/products.json'),newProducts);
        // res.redirect('/')


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
    list: (req, res) => {
        Producto.findAll()
            .then(producto => {
                res.render('home.ejs', {producto}); //** acá iría la vista donde mostramos todos los productos.*/ 
            });
        
    },

    edit: (req,res)=>{
        let id = req.params.id;
        let product = db.Producto.findByPk(id,{
            //include:[{association: "carrito"},{association: "stock"},{association: "categoria"},{association: "marca"},{association: "estilo"},{association: "distribuidor"}]
        })
        // let product = products.find(product=>product.id==id);
        res.render('product-edit',{product});

    },
    update: (req,res)=>{
        db.Producto.update({
            name: req.body.name,
            category: req.body.category,
            descripcion: req.body.desciption,
            price:req.body.price
        },{
            where:  {
                id:  req.params.id 
            }
        });
        res.redirect('/')

















    },


        // let id = req.params.id;
        // let product = products.find(product=>product.id==id);
        // let productToEdit = {
        //     id,
        //     estilo: req.body.estilo,
        //     marca: req.body.marca,
        //     nombre :req.body.name,
        //     categoria :req.body.category,
        //     imagen: req.body.imagen,
        //     descripcion: req.body.description,
        //     precio: req.body.price
        // }
        
        // let newProducts = products.map(product=>{

        //     if(product.id==id){
        //         return product = {...productToEdit}
        //     }
        //     return product
        // })
        
        // fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(newProducts));
        
        // res.redirect('/')

    delete: (req,res)=>{
        db.Producto.destroy({
            where:{
                id: req.params.id
            }
        });
        res.redirect('/')












        // let id = req.params.id;
        // let indice = products.findIndex(product=>product.id==id);
        
        // if (indice => 0) {
        //     products.splice(indice, 1)
        // }

    },
    //método LIST para que traiga todos los productos. 
    list: (req, res) => {
        Producto.findAll()
            .then(producto => {
                res.render('home.ejs', {producto}); //** acá iría la vista donde mostramos todos los productos.*/ 
            });
        
    }

    //método DETAIL para ver el detalle de los productos
    // 'detail': (req, res) =>{

    //    let id = req.params.id;
    //     Producto.findByPK(id)
    //         .then(product =>{
    //             res.render('product-detail', {product}); //le puse product porque así está en la vista
    //         })

    // }

    //método ADD para agregar un producto 
    // add: function (req, res){
        
    //     res.render('/products/create')

    // },
    // create: function (req,res){

    //     //los valores dsp de body deben ser los mismos que figuran en name de product-create.ejs
    //     let product = {
    //     //a la izquierda el nombre de la columna en la DB y a la derecha el nombre que pusimos en el formulario 
        
    //     nombre : req.body.name,
    //     categoria : req.body.category,
    //     imagen : req.body.image,
    //     descripcion : req.body.description,
    //     precio : req.body.price 

    //     }
    //     //ponemos producto porque así lo llamé en la línea 11
    //     Producto.create(product)         //para guardar en la db

    //     .then(product=>{ //sin el then no aparece en el listado el producto creado 
    //         console.log(product)

    //         res.redirect('/') //redirecciona a la home??? se puede cambiar
    //     })

    //     .catch(error =>{
    //         console.log(error)
    //     })


        
    // }



}