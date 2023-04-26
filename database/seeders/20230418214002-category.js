'use strict';

const categorias = [
  {
    name: 'cerveza'
  },
  {
    name: 'merchandising'
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('Categories', categorias, {});
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
