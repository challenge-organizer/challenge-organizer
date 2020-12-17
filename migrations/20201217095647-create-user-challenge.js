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
        references:{
          model:{tableName: 'Users'},
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      ChallengeId: {
        type: Sequelize.INTEGER,
        references:{
          model:{tableName: 'Challenges'},
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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