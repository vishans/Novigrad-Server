const express = require('express');
const showroomController  = require('../controllers/showroomController');
const router = express.Router();

router.route('/')
.post(showroomController.createShowroom);

router.route('/setAddress').post(showroomController.setShowroomAddress);
router.route('/setHours').post(showroomController.setShowroomHours);
router.route('/setAddressAndHours').post(showroomController.setShowroomAddressAndHours);


router.route('/getShowroom').post(showroomController.getShowroomByName);

router.route('/updateServices').post(showroomController.updateShowroomServices);




module.exports = router;