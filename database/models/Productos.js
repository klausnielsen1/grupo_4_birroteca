module.exports = ( sequelize, dataTypes) =>{
    let alias = "producto";
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        id_categoria : {
            type: dataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
            allowNull: false
        },

        id_marca : {
            type: dataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
            allowNull: false
        },

        id_estilo : {
            type: dataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
            allowNull: false
        },

        id_distribuidor : {
            type: dataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING,
            allowNull: false 

        },

        imagen:{
            type: dataTypes.STRING,
            allowNull: false

        },

        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false

        },

        precio: {
            type: dataTypes.INTEGER,
            allowNull: false

        }
    }
    let config = {
        tableName: "producto",
        timestamps:false
    }

    const producto= sequelize.define(alias,cols,config);

    ////////////////////////hasMany////////////////////////////////

    producto.associate = function (models){

        producto.hasMany(models.carrito, {
            
            as: "carrito",
            foreignKey:"id_producto"

        });

    }

    producto.associate = function (models){

        producto.hasMany(models.stock, {
            
            as: "stock",
            foreignKey:"id_producto"

        });

    }

    ////////////////////////belongsTo////////////////////////////////


    producto.associate = function (models){

        producto.belongsTo(models.categoria, {

            as: "categoria",
            foreignKey:"id_categoria" 

        });

    }

    producto.associate = function (models){

        producto.belongsTo(models.marca, {

            as: "marca",
            foreignKey:"id_marca" 

        });

    }

    producto.associate = function (models){

        producto.belongsTo(models.estilo, {

            as: "estilo",
            foreignKey:"id_estilo" 

        });

    }

    producto.associate = function (models){

        producto.belongsTo(models.distribuidor, {

            as: "distribuidor",
            foreignKey:"id_distribuidor" 

        });

    }

    return producto;
}