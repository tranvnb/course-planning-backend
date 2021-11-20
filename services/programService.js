const { v4: uuidv4 } = require('uuid');
const { Program } = require('../models/index');

const findAll = async () => {
    return Program.find({});
}

const findByCode = async (code) => {
    return Program.findOne({ code: code });
}


const programService = { findAll, findByCode }

module.exports = programService;