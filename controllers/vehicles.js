var Vehicles = require("../models/vehicles");

// List of all Vehicles
exports.vehicles_list = async function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicles list');
};

// for a specific Vehicles.
exports.vehicles_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicles detail: ' + req.params.id);
};

// Handle Vehicles create on POST.
exports.vehicles_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicles create POST');
};

// Handle Vehicles delete form on DELETE.
exports.vehicles_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicles delete DELETE ' + req.params.id);
};

// Handle Vehicles update form on PUT.
exports.vehicles_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Vehicles update PUT' + req.params.id);
};

// // VIEWS
// // Handle a show all view
// exports.vehicle_view_all_Page = async function (req, res) {
//     try {
//         theVehicles = await Vehicles.find();
//         res.render('vehicles', { title: 'Vehicle Search Results', results: theVehicles });
//     }
//     catch (err) {
//         res.status(500);
//         res.send(`{"error": ${err}}`);
//     }
// };