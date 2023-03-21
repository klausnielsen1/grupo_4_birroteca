module.exports = ( sequelize, dataTypes) =>{
    let alias = "categoria";
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING,
            allowNull: false

        }
        
    }
    let config = {
        tableName: "categoria",
        timestamps:false
    }

    const categoria= sequelize.define(alias,cols,config);


    return categoria;
}