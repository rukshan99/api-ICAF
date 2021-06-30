const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const conference = require('../schemas/conference-schema');


const addingConference = async (req, res, next) => {
  if (req.body) {
    const workshop = new conference(req.body);
    await workshop.save()
      .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }
}

const getAllConference = async (req, res) => {
  await conference.find({})
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
}

const getSingleConference = async (req, res) => {
  await conference.findById(req.params.id)
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
}


const getPresentationForConference = async (req, res) => {
  if (req.params && req.params.id) {
    await conference.findById(req.params.id)
      .populate('presentation', 'topic description starttime endtime presenter')
      .then(data => {
        res.status(200).send({ presentation: data.presentation });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }
}

const getWorkshopForConference = async (req, res) => {
  if (req.params && req.params.id) {
    await conference.findById(req.params.id)
      .populate('workshop', 'topic description starttime endtime presenter')
      .then(data => {
        res.status(200).send({ workshop: data.workshop });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }
}

const updateConference = async (req, res) => {
  console.log(req.body)
  if(!req.body){
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
    await conference.findByIdAndUpdate(req.params.id,req.body,{useFindAndModify : false})
      .then(data => {
        if(!data){
          res.status(400).send({ message: 'cannot update conference' });
        }else res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  
}



module.exports = {
  addingConference,
  getAllConference,
  getSingleConference,
  getPresentationForConference,
  getWorkshopForConference,
  updateConference
};

