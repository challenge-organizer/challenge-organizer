const router = require('express').Router();
const Controller = require('../controllers');
const ChallengeController = require('../controllers/challege');

router.get('/', ChallengeController.getChallengeHandler);

router.get('/add', ChallengeController.getChallengeAddHandler);
router.post('/add', ChallengeController.postChallengeAddHandler);
router.get('/:id/edit', ChallengeController.getChallengeEditHandler);
router.post('/:id/edit', ChallengeController.postChallengeEditHandler);
router.get('/:id/delete', ChallengeController.getChallengeDeleteHandler);

router.get('/user', ChallengeController.getUser)
router.get('/user/:id/giveScore', ChallengeController.getScore)
router.post('/user/:id/giveScore', ChallengeController.postScore)


module.exports = router;