const config = require('../config');

const PASSWORD =  encodeURIComponent(config.dbPassword);
const user = encodeURIComponent(config.dbUser);

const URI = `mysql://${user}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
console.log(URI);
module.exports = {
    development: {
        url :URI,
        dialect: 'mysql'
    },
    production: {
        url :URI,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
              rejectUnauthorized: false 
            }
        }
    }
}