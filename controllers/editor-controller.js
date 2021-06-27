const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const conference = require('../schemas/editor-schema');


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
        await conference.find({}).populate('presentation', 'topic description presenter')
        .then(data => {
          res.status(200).send({ data: data });
        })
        .catch(error => {
          res.status(500).send({ error: error.message });
        });
      }
  
    module.exports = {
        addingConference,
        getAllConference
    };

