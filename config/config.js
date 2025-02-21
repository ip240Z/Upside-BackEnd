require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DEV_DB_USER,
    "password": process.env.DEV_DB_PASSWORD, //probably null
    "database": "upside_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PROD_DB_USER,
    "password": process.env.PROD_DB_PASSWORD, 
    "database": process.env.PROD_DB_NAME,
    "host": process.env.PROD_DB_HOST,
    "dialect": "postgres"
  }
}
