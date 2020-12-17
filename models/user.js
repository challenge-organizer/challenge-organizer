'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Must fill First Name',
        },
      },
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Must fill Last Name',
        },
      },
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Must fill Username',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { //tidak dapat terbaca kosong karena menggunakan bcrypt
          msg: 'Must fill password'
        }
      }
    },
    isAdmin: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate(instance, options) {
        instance.isAdmin = false
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};