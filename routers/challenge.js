const router = require('express').Router();
const Controller = require('../controllers');
const ChallengeController = require('../controllers/challege');

router.get('/', ChallengeController.getChallengeHandler);

router.get('/add', ChallengeController.getChallengeAddHandler);
router.post('/add', ChallengeController.postChallengeAddHandler);
router.get('/:id/edit', ChallengeController.getChallengeEditHandler);
router.post('/:id/edit', ChallengeController.postChallengeEditHandler);
router.get('/:id/delete', ChallengeController.getChallengeDeleteHandler);
//=======================================================================
//user tampilan admin
router.get('/user/admin', ChallengeController.getUserAdmin)
router.get('/user/admin/:id/giveScore', ChallengeController.getScore)
router.post('/user/admin/:id/giveScore', ChallengeController.postScore)
//=========================================================================

router.get('/user/user', ChallengeController.getUserUser)
router.get('/user/user/:id/seeScore', ChallengeController.getUserScore)


module.exports = router;