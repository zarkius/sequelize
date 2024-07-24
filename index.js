const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./src/sequelize');

// Create an instance of Express
const app = express();

// Connect to the database
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

// Define a model
class User extends Model {}
User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
}, { sequelize, modelName: 'user' });

// Define routes
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});