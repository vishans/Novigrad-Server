const express = require('express');
const requestController  = require('../controllers/requestController');
const router = express.Router();

router.route('/submitRequest')
.post(requestController.submitRequest);

router.route('/getRequestByUsername')
.post(requestController.getRequestByUser);

module.exports = router;