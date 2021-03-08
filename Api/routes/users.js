const express = require('express')
const router = express.Router()

const usersCtrl = require('../controllers/users')

router.post('/', usersCtrl.createUser)
router.get('/', usersCtrl.getAllUser)
router.get('/:id', usersCtrl.getOneUser)
router.put('/:id', usersCtrl.updateUser)
router.delete('/:id', usersCtrl.deleteUser)


module.exports = router