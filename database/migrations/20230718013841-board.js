'use strict';

const { BOARD_TABLE, boardModel } = require('../models/boardModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(BOARD_TABLE, boardModel);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(BOARD_TABLE);
  }
};
