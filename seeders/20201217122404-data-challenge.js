'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    const data = require('../Challenges.json')
    data.forEach((el)=>{
      el.createdAt = new Date ()
      el.updatedAt = new Date ()
    })
    return queryInterface.bulkInsert('Challenges', data, {})
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

  down:(queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Challenges', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
