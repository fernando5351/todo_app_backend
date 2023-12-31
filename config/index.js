require('dotenv').config();

const config = {
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    emailPassword: process.env.NODEMAILER_PASSWORD,
    emailAdress: process.env.NODEMAILER_MAIL,
    jwtSecret: process.env.JWT_SECRET
}

module.exports = config;