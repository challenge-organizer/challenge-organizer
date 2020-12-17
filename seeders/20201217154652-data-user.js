'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = require('../user.json')
    data.forEach((el)=>{
      el.createdAt = new Date ()
      el.updatedAt = new Date ()
    })
    return queryInterface.bulkInsert('Users', data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('USers', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
