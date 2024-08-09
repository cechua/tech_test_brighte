const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const User = require('../models/users');

return sequelize
  .authenticate()
  .then((result) => {
    console.log(`SQLite successfully connected!`);
    return User.sync();
  })
  .catch((error) => {
    console.error('Unable to connect to SQLite database:', error);
  });
