const express = require('express');
const serviceController  = require('../controllers/serviceController');
const router = express.Router();

router.route('/')
.post(serviceController.createService)
.patch(serviceController.updateService)
.delete(serviceController.deleteServiceByName)

router.route('/allnames').get(serviceController.getAllServiceNames);

router.route('/getDocuments').post(serviceController.getDocuments);

module.exports = router;