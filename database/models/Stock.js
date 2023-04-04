module.exports = ( sequelize, dataTypes) =>{
    let alias = "stock";
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
        tableName: "stock",
        timestamps:false
    }

    const stock= sequelize.define(alias,cols,config);


    stock.associate = function (models){

        stock.hasMany(models.producto, {
            
            as: "producto",
            foreignKey:"id_producto"

        });

    }


    return stock;
}