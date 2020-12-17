'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    static associate(models) {
      // define association here
      Challenge.belongsToMany(models.User,{through: models.UserChallenge})
    }
  };
  Challenge.init({
    name: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: "Challenge Name Can't Empty"
        }
      }
    },
    challengeCode: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: "Challenge Code Can't Empty"
        }
      }
    },
    isActive: DataTypes.BOOLEAN
  },{
    sequelize,
    modelName: 'Challenge',
  });
  return Challenge;
};