'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      idBrand: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "brands"
          },
          key : 'id'
        }
      },
      idStyle: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "styles"
          },
          key : 'id'
        }
      },
      idDistributor: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "distributors"
          },
          key : 'id'
        }
      },
      idCategory: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "categories"
          },
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};