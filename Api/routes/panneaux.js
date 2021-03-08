const express = require('express')
const router = express.Router()

const panneauxCtrl = require("../controllers/panneaux")

router.post('/', panneauxCtrl.createPanneaux)
router.get('/', panneauxCtrl.getAllPanneaux)
router.get('/:id', panneauxCtrl.getOnePanneaux)
router.put('/:id', panneauxCtrl.updatePanneaux)
router.delete('/:id', panneauxCtrl.deletePanneaux)


module.exports = router