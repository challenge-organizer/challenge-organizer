'use strict';
module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable('UserChallenges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
      },
      ChallengeId: {
        type: Sequelize.INTEGER,
      },
      Score: {
        type: Sequelize.INTEGER
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
  down:(queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserChallenges');
  }
};