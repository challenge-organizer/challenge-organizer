'use strict';

const bcrypt = require('bcryptjs');
const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let dataUser = require('../data/users.json');
		dataUser.forEach((el) => {
			el.password = hashPassword(el.password);
			el.createdAt = new Date();
			el.updatedAt = new Date();
		});
		return queryInterface.bulkInsert('Users', dataUser, {});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	},
  
};
