const express = require('express');
const requestController  = require('../controllers/requestController');
const router = express.Router();

router.route('/submitRequest')
.post(requestController.submitRequest);

router.route('/queryRequest')
.post(requestController.queryRequest);

router.route('/setRequestStatus')
.post(requestController.setRequestStatus);

router.route('/getUserShowrooms')
.post(requestController.getUniqueShowroomsForUser);

module.exports = router;