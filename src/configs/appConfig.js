// Load environment variables from .env file
require('dotenv').config();

// Configuration for the app using environment variables
const appConfig = {
    port: process.env.PORT,
    host: process.env.HOST ,
    viewEngine: process.env.VIEW_ENGINE ,


    DB_HOST:process.env.DB_HOST,
    DB_USER:process.env.DB_USER,
    DB_PASSWORD:process.env.DB_PASSWORD,
    DB_NAME:process.env.DB_NAME,


    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN
};

module.exports = appConfig;
