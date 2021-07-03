const Workshop = require('../schemas/workshop-schema')
const Conference = require('../schemas/conference-schema')

const createWorkshop = async (req, res) => {
    if (req.body) {
        const { conference } = req.body;

        const workshop = new Workshop(req.body);

        try {
            const data = await workshop.save();
            await Conference.updateOne({ _id: conference }, { $addToSet: { workshop: workshop._id } }, (err, res) => { });
            res.status(200).send({ data: data });
        } catch (error) {
            console.error(error)
        }


    }
}


const getSingleWorkshop = async (req, res) => {
    await Workshop.findById(req.params.id)
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  } 

module.exports = {
    createWorkshop,
    getSingleWorkshop
};