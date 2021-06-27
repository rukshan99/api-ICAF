const Workshop = require('../schemas/workshop-schema')

const createWorkshop = async (req, res) => {
    if (req.body) {
      const workshop = new Workshop(req.body);
      await workshop.save()
      .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  module.exports = {
    createWorkshop
  };