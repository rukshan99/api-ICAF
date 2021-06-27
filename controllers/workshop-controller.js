const Workshop = require('../schemas/workshop-schema')
const Conference = require('../schemas/editor-schema')

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

module.exports = {
    createWorkshop
};