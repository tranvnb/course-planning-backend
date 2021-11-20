const { programService } = require('../services/index');

exports.getAll = async (req, res) => {
  if (req.query.code !== undefined && req.query.code !== "") {
    programService.findByCode(req.query.code)
      .then(result => {
        res.json(result);
      })
  } else { // else find all
    programService.findAll()
      .then(result => {
        res.json(result);
      })
  }
}

exports.getByCode = async (req, res) => {
  programService.findByCode(req.params.code)
    .then(result => {
      res.json(result);
    })
    .catch((err, doc) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

