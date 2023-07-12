const { Sequelize } = require('sequelize');
const config = require('../config');
const { modelsSetup } = require('../database/models')

const PASSWORD =  encodeURIComponent(config.dbPassword);
const user = encodeURIComponent(config.dbUser);

const URI = `mysql://${user}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'mysql'
});

modelsSetup(sequelize);

module.exports = sequelize;
