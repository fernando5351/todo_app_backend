'use strict';

const { USER_TABLE, UserModel } = require('../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserModel);
  },

  async down (queryInterface) {
    await queryInterface.createTable(USER_TABLE);
  }
};
