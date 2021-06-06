const express = require('express');
const router = express.Router();

const EditorController = require('../controllers/editor-controller');

router.post('/editor', EditorController.addingConference);

module.exports = router;