module.exports = ( sequelize, dataTypes) =>{
    let alias = "pedido";
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        

        id_cliente: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
            allowNull: false
        },   

        id_carrito: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING,
            allowNull: false

        },

        apellido:{
            type: dataTypes.STRING,
            allowNull: false

        },

        email: {
            type: dataTypes.STRING,
            allowNull: false

        },

        contraseña: {
            type: dataTypes.STRING,
            allowNull: false

        },

        fecha: {
            type: dataTypes.DATE,
            allowNull: false

        },

        importe : {
            type: dataTypes.INTEGER,
            allowNull: false

        }
    }
    let config = {
        tableName: "pedido",
        timestamps:false
    }

    const pedido= sequelize.define(alias,cols,config);


    return pedido;
}