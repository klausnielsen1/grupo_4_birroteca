'use strict';


const productos = [
{
  
}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      Example:
      await queryInterface.bulkInsert('Products', productos, {});
  },

  async down (queryInterface, Sequelize) {

      /* Add commands to revert seed here. */
     
      Example:
      await queryInterface.bulkDelete('People', null, {});

  }
};
