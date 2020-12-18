const router = require('express').Router();
const Controller = require('../controllers');
const ChallengeController = require('../controllers/challege');
const UserController = require('../controllers/user')

router.get('/', UserController.getUser)
router.get('/:id/giveScore', UserController.getScore)
router.post('/:id/giveScore', UserController.postScore)

router.get('/user', UserController.getUserUser)
router.get('/user/:id/seeScore', UserController.getUserScore)
router.get('/user/:id/chart', UserController.getUserScoreChart)


module.exports = router;