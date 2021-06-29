const Admin = require('../schemas/user-schema');
const Conference =require('../schemas/editor-schema')
const Workshop = require('../schemas/worshop-schema')
const Presentation = require('../schemas/research-presentation-schema')

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
        let totalRejectedResearchPapers = 0;
        let totalAcceptedResearchPapers = 0;
        let totalPendingResearchPapers = 0;

        userList.map(user => {
            if(user.role === 'Attendee') {
                totalroleAttendee++;
            }
            else if(user.role === 'Researcher') {
                totalroleResearcher++;
                if(user.document.docStatus === 'Rejected') {
                    totalRejectedResearchPapers++;
                }
                else if(user.document.docStatus === 'Rejected') {
                    totalAcceptedResearchPapers++;
                }
                else if(user.document.docStatus === 'Rejected') {
                    totalPendingResearchPapers++;
                }
            }
            else if(user.role === 'Workshop Presenter') totalroleWorkshopPresenter++;
            
        });
        
        

        res.status(200).send({ 
            totalroleAttendee: totalroleAttendee,
            totalroleResearcher: totalroleResearcher,
            totalroleWorkshopPresenter: totalroleWorkshopPresenter,
            totalAcceptedResearchPapers: totalAcceptedResearchPapers,
            totalAcceptedResearchPapers: totalAcceptedResearchPapers,
            totalPendingResearchPapers: totalPendingResearchPapers
        });
  
}

const getAllConference = async (req, res) => {
    await Conference.find()
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message});
    })
}

const getAllWorkshops = async (req, res) => {
    await Workshop.find({})
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message});
    })
  }

  const getAllPresentations = async (req, res) => {
    await Presentation.find()
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message});
    })
  }

const getOneConference = async (req, res) =>{
    const id = req.params.id;

    Conference.findById(id)
    .then(data => {
        if (!data)
            res.status(404).send({message: "not found Conference id " + id});
            else res.send(data);
    })
    .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
}

const updateconference = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Conference.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

  const findPublishedConference = (req, res) => {
      Conference.find({status: true})
      .then(data => {
        res.status(200).send({ data: data});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
}

 


module.exports = {
    countRole,
    getAllConference,
    getOneConference,
    updateconference,
    getAllWorkshops,
    getAllPresentations,
    findPublishedConference
};