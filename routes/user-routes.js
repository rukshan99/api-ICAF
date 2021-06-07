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
router.post('/pay', authorize([Role.Attendee, Role.Researcher]), savePayment);
router.get('/downloads/template-research-paper', [],(req,res) => res.download('./docs/template-research-paper.docx'));
router.get('/downloads/template-workshop-proposal', [],(req,res) => res.download('./docs/template-workshop-proposal.doc'));
router.get('/downloads/sample-research-paper', [],(req,res) => res.download('./docs/sample-research-paper.pdf'));
router.get('/downloads/sample-workshop-proposal', [],(req,res) => res.download('./docs/sample-workshop-proposal.pdf'));

//Below routes are for authorization testing purposes only.
router.get('/admin', authorize(Role.Admin), () => "message: Admin authorized."); //admin only route sample
router.get('/reviewer', authorize(Role.Reviewer), () => "message: Reviewer authorized."); //reviewer only route sample
router.get('/editor', authorize(Role.Editor), () => "message: Editor authorized."); //editor only route sample

module.exports = router;