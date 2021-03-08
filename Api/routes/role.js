const express = require('express')
const router = express.Router()

const roleCtrl = require('../controllers/role')

router.post('/', roleCtrl.createRole)
router.get('/', roleCtrl.getAllRole)
router.get('/:id', roleCtrl.getOneRole)
router.put('/:id', roleCtrl.updateRole)
router.delete('/:id', roleCtrl.deleteRole)

module.exports = router