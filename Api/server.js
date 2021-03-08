require('babel-register')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { Sequelize } = require('sequelize')


const app = express()
const port = process.env.PORT || 3000

// MIDDLEWARES
app.use(morgan('dev'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
/////////////////////////////////////////////////////////////

// CONNEXION A LA BASE DE DONNEES
const sequelize = new Sequelize('gestionpaneaux', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
/////////////////////////////////////////////////////////////

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.')
    sequelize.sync({ alter: true })

    // ROUTES

    const panneauxRoutes = require('./routes/panneaux')
    const usersRoutes = require('./routes/users')
    const reservationRoutes = require('./routes/reservation')
    const roleRoutes = require('./routes/role')
    const reservationGrpRoutes = require('./routes/reservationGrp')

    // app.get("/", (req, res) => {
    //     res.send("hello wold")
    // })

    app.use('/api/v1/panneaux', panneauxRoutes)
    app.use('/api/v1/users', usersRoutes)
    app.use('/api/v1/reservation', reservationRoutes)
    app.use('/api/v1/role', roleRoutes)
    app.use('/api/v1/reservationGrp', reservationGrpRoutes)

    /////////////////////////////////////////////////////////////

    app.listen(port, console.log("app started on port " + port))

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  

