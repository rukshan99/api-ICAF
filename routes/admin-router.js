const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin-controller');


router.get('/count', [], controller.countRole);
router.get('/', controller.getAllConference);
router.get('/:id',controller.getOneConference);
router.put('/:id', controller.updateconference);
router.get('/presentation/all', controller.getAllPresentations);
router.get('/workshop/all', controller.getAllWorkshops);
router.get('/approved/one', controller.findPublishedConference);
router.get('/presentations/:id', controller.getPresentationsForConference);
router.get('/workshops/:id', controller.getWorkshopForConference);

module.exports = router