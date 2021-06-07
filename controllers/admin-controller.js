const Admin = require('../schemas/user-schema');

const countRole = async (req, res) => {
    
        let userList = null;
        try{
            userList = await Admin.find({}, function(err, result) {
                if (err) {
                  console.log(err);
                } else {
                  
                }
              });
        } catch(err) {
            return err;
        }
        
        let totalroleAttendee = 0;
        let totalroleResearcher = 0;
        let totalroleWorkshopPresenter = 0;

        userList.map(user => {
            if(user.role === 'Attendee') totalroleAttendee++;
            else if(user.role === 'Researcher') totalroleResearcher++;
            else if(user.role === 'Workshop Presenter') totalroleWorkshopPresenter++;
        });
        
        

        res.status(200).send({ 
            totalroleAttendee: totalroleAttendee,
            totalroleResearcher: totalroleResearcher,
            totalroleWorkshopPresenter: totalroleWorkshopPresenter
        });
  
}

module.exports = {
    countRole
};