const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Address = sequelize.define('Address', {
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


User.hasMany(Address, { onDelete: 'CASCADE' });
Address.belongsTo(User);

module.exports = Address;
