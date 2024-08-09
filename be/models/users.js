const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
  'user',
  {
    givenName: DataTypes.TEXT,
    surName: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    homeName: DataTypes.TEXT,
    street: DataTypes.TEXT,
    suburb: DataTypes.TEXT,
    state: DataTypes.TEXT,
    postCode: DataTypes.TEXT,
    country: DataTypes.TEXT,
    timestamp: DataTypes.BIGINT,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { timestamps: true }
);

module.exports = User;
