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


    return producto;
}