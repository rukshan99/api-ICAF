const User = require('../schemas/user-schema');
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

exports.findAllReseachers = (req, res) => {
  User.find({ role: 'Researcher' })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found user with Reseacher " });
      else res.send({ data: data });
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Error retrieving user details with researcher role" });
    });
};

exports.findAllWorkshopPresenters = (req, res) => {
  User.find({ role: 'Workshop Presenter' })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found user with workshop presenter " });
      else res.send({ data: data });
    })
    .catch(err => {
      res .status(500) .send({ message: "Error retrieving user details with workshop presenter role" });
    });
};

exports.getUserById = async (req, res) => {
  if (req.params && req.params.id) {
    await User.findById(req.params.id)
      .then(data => {
        res.status(200).send({ data: data.document });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }
};

exports.updateReasercherDocStatus = async (req, res) => {
  await User.findById(req.body.RequestID)
    .then(data => {
      User.updateOne({ _id: req.body.RequestID }, { payments:data.payments,userid:data.userid,name:data.name,email:data.email,password:data.password,role:data.role, document: { docName: data.document.docName, docData: data.document.docData, docStatus: req.body.Status } }, function (err, docs) {
        if (!err) {
          if(req.body.Status == "Accepted"){
            var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'icafsliit9@gmail.com',
                pass: 'icaf12345*'
              }
            });
            transporter.use('compile',hbs({
                viewEngine:'express-handlebars',
                viewPath:'./views'
            }))
            var mailOptions = {
              from: 'icafsliit9@gmail.com',
              to:data.email,
              subject: 'please make your payment',
              text: 'Your Research paper has been approved.',
              template:'index'
              
            };
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
          }         
        } else {
          console.log("Error")
        }
      })   
    })
    .catch(error => {
      console.log(error)
      res.status(500).send({ error: error.message });
    });
  };


exports.updatePresenterDocStatus = async (req, res) => {
  await User.findById(req.body.RequestID)
    .then(data => {
      User.updateOne({ _id: req.body.RequestID }, { payments:data.payments,userid:data.userid,name:data.name,email:data.email,password:data.password,role:data.role, document: { docName: data.document.docName, docData: data.document.docData, docStatus: req.body.Status } }, function (err, docs) {
        if (!err) {
          console.log("updated successfully");
        } else {
          console.log("Error");
        }
      })   
    })
    .catch(error => {
      console.log(error)
      res.status(500).send({ error: error.message });
    });
};