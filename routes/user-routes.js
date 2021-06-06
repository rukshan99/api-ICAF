const express = require('express');
const router = express.Router();

const authorize = require('../_helpers/authorize')
const Role = require('../_helpers/role');

const { saveUser, authenticate, savePayment } = require('../controllers/user-controller');

const auth = (req, res, next) => {
    authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'E-mail or password is incorrect' }))
        .catch(err => next(err));
}

router.post('/auth', [], auth);
router.post('/signup', [], saveUser);
router.post('/pay', [], savePayment);

//Below routes are for authorization testing purposes only.
router.get('/admin', authorize(Role.Admin), () => "message: Admin authorized."); //admin only route sample
router.get('/reviewer', authorize(Role.Reviewer), () => "message: Reviewer authorized."); //reviewer only route sample
router.get('/editor', authorize(Role.Editor), () => "message: Editor authorized."); //editor only route sample

module.exports = router;