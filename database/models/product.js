'use strict';
const {
  Model
} = require('sequelize');
const { product } = require('../../controllers/mainContollers');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product
      
    }
  }
  Product.init({
    name: DataTypes.STRING,
    id_category:DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    // idBrand: DataTypes.INTEGER,
    // idStyle: DataTypes.INTEGER,
    // idDistributor: DataTypes.INTEGER,
    // idCategory: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};