module.exports = ( sequelize, dataTypes) =>{
    let alias = "pedido";
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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


    pedido.associate = function (models){

        pedido.belongsTo(models.cliente, {

            as: "cliente",
            foreignKey:"id_cliente"
        });

    }

    
    pedido.associate = function (models){

        pedido.belongsTo(models.carrito, {

            as: "carrito",
            foreignKey:"id_carrito"
        });

    }

    

    return pedido;
}