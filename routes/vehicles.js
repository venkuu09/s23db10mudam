var express = require('express');
var vehicle_controller = require('../controllers/vehicles');
var router = express.Router();

/* GET home page. */
router.get('/', vehicle_controller.vehicle_view_all_Page );

module.exports = router;
