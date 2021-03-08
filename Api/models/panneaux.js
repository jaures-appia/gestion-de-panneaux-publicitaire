const { Sequelize, DataTypes } = require('sequelize')

// CONNEXION A LA BASE DE DONNEES
const sequelize = new Sequelize('gestionpaneaux', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
/////////////////////////////////////////////////////////////

const Panneaux = sequelize.define('Panneaux', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commune: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ville: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Abidjan"
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    localisation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
},
{
    freezeTableName: true,
})

module.exports = Panneaux