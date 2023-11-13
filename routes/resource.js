var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var vehicles_controller = require('../controllers/vehicles');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// VEHICLES ROUTES ///
// POST request for creating vehicles.
router.post('/vehicles', vehicles_controller.vehicles_create_post);
// DELETE request to delete vehicles.
router.delete('/vehicles/:id', vehicles_controller.vehicles_delete);
// PUT request to update vehicles.
router.put('/vehicles/:id', vehicles_controller.vehicles_update_put);
// GET request for one vehicles.
router.get('/vehicles/:id', vehicles_controller.vehicles_detail);
// GET request for list of all vehicles items.
router.get('/vehicles', vehicles_controller.vehicles_list);

/* GET detail vehicles page */
router.get('/detail', vehicles_controller.vehicles_view_one_Page);
// GET create costume page
router.get('/create', vehicles_controller.vehicles_create_Page);

module.exports = router;