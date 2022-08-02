const express = require('express');
const router = express.Router();
const Controller = require('../app/api/controllers/scheduledmaintenancenotification');

router.get('/', Controller.getAll);
router.post('/', Controller.create);
router.get('/scheduledmaintenance/:Id', Controller.getById);
router.put('/:Id', Controller.updateById);
router.delete('/:Id', Controller.deleteById);

module.exports = router;