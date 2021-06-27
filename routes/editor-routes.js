const express = require('express');
const router = express.Router();

const EditorController = require('../controllers/editor-controller');
const PresentationController = require('../controllers/presentation-controller');
const WorkshopController = require('../controllers/workshop-controller');

router.post('/presentation', PresentationController.createPresentation);
router.post('/conference', EditorController.addingConference);
router.post('/workshop', WorkshopController.createWorkshop);
router.get('/', EditorController.getAllConference);

module.exports = router;