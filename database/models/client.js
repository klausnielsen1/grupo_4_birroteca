'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    name: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    password: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    idClass: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};