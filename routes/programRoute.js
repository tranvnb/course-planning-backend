
const { programController } = require('../controllers/index');
const express = require("express");

const programRoute = express.Router();

// get all users
programRoute.get('/', programController.getAll)

// get by id
programRoute.get('/:code', programController.getByCode)


module.exports = programRoute;
