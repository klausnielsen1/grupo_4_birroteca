module.exports = ( sequelize, dataTypes) =>{
    let alias = "stock";
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        id_producto: {
            type: dataTypes.INTEGER,
            foreignKey: true,
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


    return stock;
}