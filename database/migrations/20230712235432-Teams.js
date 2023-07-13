const {TEAMS_TABLES, teamsModel} = require ('../models/teamsModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TEAMS_TABLES,teamsModel)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(TEAMS_TABLES);
  }
};
