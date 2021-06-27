const Presentation = require('../schemas/research-presentation-schema')
const Conference = require('../schemas/editor-schema') 

const createPresentation = async (req, res) => {
    if (req.body) {
      const presentation = new Presentation(req.body);
      await presentation.save()
      .then(data => {
          console.log(data)
        Conference.findByIdAndUpdate(data.conference, { $push: { presentation: data._id }}, { new: true, useFindAndModify: false })
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  module.exports = {
    createPresentation
  };