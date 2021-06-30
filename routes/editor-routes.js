const express = require('express');
const router = express.Router();

const EditorController = require('../controllers/conference-controller');
const PresentationController = require('../controllers/presentation-controller');
const WorkshopController = require('../controllers/workshop-controller');

router.post('/presentation', PresentationController.createPresentation);
router.post('/conference', EditorController.addingConference);
router.post('/workshop', WorkshopController.createWorkshop);
router.get('/conference/', EditorController.getAllConference);
router.get('/conference/:id', EditorController.getSingleConference);
router.put('/conference/:id', EditorController.updateConference);
router.get('/presentation/:id', EditorController.getPresentationForConference);
router.get('/presentation/single/:id', PresentationController.getSinglePresentation);
router.get('/workshop/:id', EditorController.getWorkshopForConference);
router.get('/workshop/single/:id', WorkshopController.getSingleWorkshop);


module.exports = router;