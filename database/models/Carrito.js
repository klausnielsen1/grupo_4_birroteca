module.exports = ( sequelize, dataTypes) =>{
    let alias = "carrito"; //alias de la tabla
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },


        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "carrito",
        timestamps:false
    }

    const carrito= sequelize.define(alias,cols,config);

    ////////////////////////hasMany////////////////////////////////

    carrito.associate = function (models){

        carrito.hasMany(models.pedido, {
            
            as: "pedido",
            foreignKey:"id_carrito"
        });

    }

    ////////////////////////belongsTo////////////////////////////////


    carrito.associate = function (models){

        carrito.belongsTo(models.producto, {

            as: "producto",
            foreignKey:"id_producto"
        });

    }

    return carrito;
}