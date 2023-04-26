'use strict';

const distribuidores = [
  {
    name: 'ejemplo 1'
  },
  {
    name: 'ejemplo 2'
  },
  {
    name: 'ejemplo 3'
  },
  {
    name: 'ejemplo 4'
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('Distributors', distribuidores, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
