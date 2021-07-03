const express = require('express');
const router = express.Router();

const reviewerController = require('../controllers/reviewer-controller');

router.get('/reserchers', [], reviewerController.findAllReseachers);
router.get('/presenters', [], reviewerController.findAllWorkshopPresenters);
router.get('/user/:id', [], reviewerController.getUserById);
router.put('/researcher/update/:id', [], reviewerController.updateReasercherDocStatus);
router.put('/presenter/update/:id', [], reviewerController.updatePresenterDocStatus);
    
 
module.exports = router;