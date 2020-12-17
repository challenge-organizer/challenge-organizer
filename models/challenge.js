'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Challenge.belongsToMany(models.User,{through:models.UserChallenge})
      // define association here
    }
  };
  Challenge.init({
    name: DataTypes.STRING,
    challengeCode: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Challenge',
  });
  return Challenge;
};