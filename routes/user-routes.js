const express = require('express');
const router = express.Router();

const { saveUser } = require('../controllers/user-controller');

router.post('/auth', [], saveUser);

module.exports = router;