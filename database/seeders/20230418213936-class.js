'use strict';

const clases = [
  {
    name: 'admin'
  },
  {
    name: 'user'
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('Classes', clases, {});
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
