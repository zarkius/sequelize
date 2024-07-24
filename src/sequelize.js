const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://zarkius:1234@localhost:5432/go') // Example for postgres

module.exports = sequelize;