const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const { uuid } = require('uuidv4');


const viewAllUsers = async (req, res, next) => {
   await Course.find({}).populate('User', 'userid name document')
  .then(data => {
    res.status(200).send({ data: data });
  })
  .catch(error => {
    res.status(500).send({ error: error.message });
  });

}

exports.viewAllUsers = viewAllUsers;