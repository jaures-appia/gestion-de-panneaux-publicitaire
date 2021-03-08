const express = require('express')
const router = express.Router()

const reservationCtrl = require('../controllers/reservation')

router.post('/', reservationCtrl.createReservation)
router.get('/', reservationCtrl.getAllReservation)
router.get('/:id', reservationCtrl.getOneReservation)
router.put('/:id', reservationCtrl.updateReservation)
router.delete('/:id', reservationCtrl.deleteReservation)

module.exports = router