const User = require('../schemas/user-schema');
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

exports.findAllReseachers = (req, res) => {
  


  User.find({ role: 'Researcher' })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found user with Reseacher " });
      else res.send({ data: data });
      // console.log(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: err.message || "Error retrieving user details with researcher role" });
    });

};

exports.findAllWorkshopPresenters = (req, res) => {

  User.find({ role: 'Workshop Presenter' })
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
exports.updateReasercherDocStatus = async (req, res) => {
  console.log(req.body)
  await User.findById(req.body.RequestID)
    .then(data => {
      console.log("Hi")
      console.log(data.document.docName)
      User.updateOne({ _id: req.body.RequestID }, { payments:data.payments,userid:data.userid,name:data.name,email:data.email,password:data.password,role:data.role, document: { docName: data.document.docName, docData: data.document.docData, docStatus: req.body.Status } }, function (err, docs) {
        if (!err) {
          if(req.body.Status == "Accept"){
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
              subject: 'Make your payment',
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

  /*if (req.params && req.params.id) {
    await User.updateOne({_id: req.params.id}, {document:{docName: req.body.docName,docData: req.body.docData,docStatus: 'Accepted'}})
    .then(data => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
      console.log(data);
      return data;
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }*/
};

// exports.updateDocStatus = async (req, res) => {
//   if (req.params && req.params.id) {
//     await User.updateOne({_id: req.params.id}, {document: {docStatus: 'Accepted'}},{upsert: false})
//     .then(data => {
//       res.status(201).json({
//         message: 'Thing updated successfully!'
//       });
//       console.log(data);
//       return data;
//     })
//     .catch(error => {
//       res.status(500).send({ error: error.message });
//     });
//   }
// };

