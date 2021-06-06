const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin-controller');

module.exports = function (){
    router.get('/count/:id', controller.countRole);
    return router;
}