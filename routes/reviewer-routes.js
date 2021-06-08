const express = require('express');
const router = express.Router();

const reviewerController = require('../controllers/reviewer-controller');

    router.get('/getAllUsers', [], reviewerController.viewAllUsers);
    
 
    module.exports = router;