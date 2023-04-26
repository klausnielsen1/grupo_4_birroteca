const fs = require('fs');
const path = require('path');

//database

const db= require ('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');
const brand = require('../database/models/brand');
const { log } = require('console');

//Para llamar a los modelos con otro nombre 





module.exports={
    index: (req,res)=>{
        const products = db.Product.findAll({
            where: {idCategory: 1}
        });
        const merchandising = db.Product.findAll({
            where: {idCategory: 2}
        });
        Promise.all([products, merchandising])
        .then(([products, merchandising]) => {
            return res.render('home', {products, merchandising});
        })
          
    },
    add: async (req,res)=>{
        const brands = await db.Brand.findAll();
        const categories = await db.Category.findAll();
        const distributors = await db.Distributor.findAll();
        const styles = await db.Style.findAll();
        Promise.all([brands, categories, distributors, styles])
        .then(([brands, categories, distributors, styles]) => {
            return res.render('product-create', {
                brands,
                categories,
                distributors,
                styles
            })
        })
        .catch(error => console.log(error))
        
    },
    create: (req,res)=>{
        const {name,description,price,brand,style,distributor,category} = req.body;
        const image = req.file.filename;
        db.Product.create({
        name: name.trim(),
        image: image.trim(),
        description: description.trim(),
        price: +price,
        idBrand: +brand,
        idStyle: +style,
        idDistributor: +distributor,
        idCategory: +category
        })
        .then(product => {
            res.redirect('/')
        })
    },
    edit: (req,res)=>{
        const id = req.params.id;
        const product = db.Product.findByPk(id);
        const brands = db.Brand.findAll();
        const styles = db.Style.findAll();
        const distributors = db.Distributor.findAll();
        const categories = db.Category.findAll();
        
        Promise.all([product, brands, styles, distributors, categories])
        .then(([product, brands, styles, distributors, categories]) => {
            res.render('product-edit',{
                product,
                brands,
                styles,
                distributors,
                categories
            })
        })

    },
    
    update: (req,res)=>{
        const id = req.params.id
        const {name,description,price,brand,style,distributor,category} = req.body;
        const image = req.file.filename;
        db.Product.update({
        name: name.trim(),
        image: image.trim(),
        description: description.trim(),
        price: +price,
        idBrand: +brand,
        idStyle: +style,
        idDistributor: +distributor,
        idCategory: +category
        },{
            where:  {
                id: id 
            }
        });
        res.redirect('/')


    },

    detail: (req,res)=>{
        const product = db.Product.findByPk(req.params.id);

        Promise.all([product])
        .then(([product]) =>{
            return res.render('product-detail',{product})
    })
        .catch(errors => console.log(errors))
    },


    
    
    carrito: (req,res)=>{
        res.render('carrito')
    },
    
    product: (req,res)=>{
        res.render('product-create')
    },
    list: (req, res) => {
        Producto.findAll()
            .then(producto => {
                res.render('home.ejs', {producto}); //** acá iría la vista donde mostramos todos los productos.*/ 
            });
        
    },



    delete: (req,res)=>{
        db.Product.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(() =>{
            return res.redirect('/');
        })
        












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