const { Sequelize, DataTypes } = require('sequelize')
const Panneaux = require('./panneaux')
const Users = require('./users')

// CONNEXION A LA BASE DE DONNEES
const sequelize = new Sequelize('gestionpaneaux', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
/////////////////////////////////////////////////////////////

const Reservation = sequelize.define('Reservation', {
    date_début: {
        type: DataTypes.DATE,
        allowNull: false
    },
    date_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },
})

Reservation.belongsTo(Users)
Reservation.belongsTo(Panneaux)

module.exports = Reservation