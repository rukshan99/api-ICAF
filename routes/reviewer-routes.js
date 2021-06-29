const express = require('express');
const router = express.Router();

const reviewerController = require('../controllers/reviewer-controller');

// router.get('/getAllUsers', [], reviewerController.viewAllUsers);
router.get('/getAllResearchers', [], reviewerController.findAllReseachers);
router.get('/getAllWorkshopPresenters', [], reviewerController.findAllWorkshopPresenters);
router.get('/:id', [], reviewerController.getUserById);
router.put('/update/:id', [], reviewerController.updateDocStatus);
    
 
module.exports = router;