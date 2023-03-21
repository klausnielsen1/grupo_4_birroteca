module.exports = ( sequelize, dataTypes) =>{
    let alias = "marca";
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: true
        }
    }
    let config = {
        tableName: "marca",
        timestamps:false
    }

    const marca= sequelize.define(alias,cols,config);


    return marca;
}