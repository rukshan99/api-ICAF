const Admin = require('../schemas/user-schema');

const countRole = async (req, res) => {
    if(req.params && req.params.id){
        const calRole = await (await Admin.findById(req.params.id)).populate('User', 'role')
        let totalroleAttendee = 0;
        let totalroleResearcher = 0;
        let totalroleWorkshopPresenter = 0;

        if(calRole.User.length > 0 && calRole.User.role === 'Attendee'){
            calRole.User.map((user) => {
                totalroleAttendee = totalroleAttendee ++;
            });
        }

        else if (calRole.User.length > 0 && calRole.User.role === 'Researcher'){
            calRole.User.map((user) => {
                totalroleResearcher = totalroleResearcher ++;
            });
        }

        else if (calRole.User.length > 0 && calRole.User.role === 'Workshop Presenter'){
            calRole.User.map((user) => {
                totalroleWorkshopPresenter = totalroleWorkshopPresenter ++;
            });
        }


        res.status(200).send({ totalroleAttendee: totalroleAttendee });
        res.status(200).send({ totalroleResearcher: totalroleResearcher });
        res.status(200).send({ totalroleWorkshopPresenter: totalroleWorkshopPresenter });
    }
}

module.exports = {
    countRole
};