const router = require('express').Router();
const Controller = require('../controllers');
const ChallengeController = require('../controllers/challege');
const UserController = require('../controllers/user')

router.get('/', UserController.getUser)
router.get('/:id/giveScore', UserController.getScore)
router.post('/:id/giveScore', UserController.postScore)

module.exports = router;