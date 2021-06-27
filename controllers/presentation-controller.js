const Presentation = require('../schemas/research-presentation-schema')
const Conference = require('../schemas/editor-schema')

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

module.exports = {
    createPresentation
};