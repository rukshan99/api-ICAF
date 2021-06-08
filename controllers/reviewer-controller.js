const User = require('../schemas/user-schema');


const viewAllUsers = async (req, res) => {
  console.log('getting all users');
  let userList = null;
  try{
    userList = await User.find({},function(err,result){
      if (err){

        console.log(err);

      }
      else {
       
        res.status(200).send({ userList: userList });
      }

    });

  }catch(err) {
      return err;
  }

 
  
}


exports.findAllReseachers = (req, res) => {

  User.find({role : 'reseacher'})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found user with reseacher " });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving user details with researcher role" });
      });
  
};

exports.findAllWorkshopPresenters = (req, res) => {

  User.find({role : 'reseacher'})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found user with reseacher " });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving user details with researcher role" });
      });
  
};


exports.viewAllUsers = viewAllUsers;
