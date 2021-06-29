const User = require('../schemas/user-schema');

exports.findAllReseachers = (req, res) => {

  User.find({role : 'Researcher'})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found user with Reseacher " });
        else res.send({ data: data });
        // console.log(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({message: err.message || "Error retrieving user details with researcher role" });
      });
  
};

exports.findAllWorkshopPresenters = (req, res) => {

  User.find({role : 'Workshop Presenter'})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found user with reseacher " });
        else res.send({ data: data });
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving user details with researcher role" });
      });
  
};

exports.getUserById = async (req, res) => {
  if (req.params && req.params.id) {
    await User.findById(req.params.id)
    .then(data => {
      res.status(200).send({ data: data.document });
      // console.log(data);
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }
};

