const express = require('express')
const router = express.Router()

const reservationGrpCtrl = require('../controllers/reservationGrp')

router.post('/', reservationGrpCtrl.createReservationGrp)
router.get('/', reservationGrpCtrl.getAllReservationGrp)
router.get('/:id', reservationGrpCtrl.getOneReservationGrp)
router.put('/:id', reservationGrpCtrl.updateReservationGrp)
router.delete('/:id', reservationGrpCtrl.deleteReservationGrp)

module.exports = router