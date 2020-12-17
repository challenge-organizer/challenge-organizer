'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserChallenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserChallenge.init({
    UserId: DataTypes.INTEGER,
    ChallengeId: DataTypes.INTEGER,
    Score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserChallenge',
  });
  return UserChallenge;
};