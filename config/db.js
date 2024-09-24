const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbname', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', 
});

module.exports = sequelize;
