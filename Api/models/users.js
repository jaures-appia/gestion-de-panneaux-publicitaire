const { Sequelize, DataTypes } = require('sequelize')

// CONNEXION A LA BASE DE DONNEES
const sequelize = new Sequelize('gestionpaneaux', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
/////////////////////////////////////////////////////////////

const Users = sequelize.define('Users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false
    },
    compagnie: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
})

module.exports = Users