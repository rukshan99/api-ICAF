const Presentation = require('../schemas/research-presentation-schema')
const Conference = require('../schemas/conference-schema')

const createPresentation = async (req, res) => {
    if (req.body) {
        const { conference } = req.body;

        const presentation = new Presentation(req.body);

        try {
            const data = await presentation.save();
            await Conference.updateOne({ _id: conference }, { $addToSet: { presentation: presentation._id } }, (err, res) => { });
            res.status(200).send({ data: data });
        } catch (error) {
            console.error(error)
        }


    }
}

const getSinglePresentation = async (req, res) => {
    await Presentation.findById(req.params.id)
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  } 

module.exports = {
    createPresentation,
    getSinglePresentation
};