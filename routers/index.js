const router = require('express').Router();
// const challengeRouter = require('./challenge');
const Controller = require('../controllers');


router.get('/', Controller.getRootHandler);

router.get('/register', Controller.getRegisterHandler);
router.post('/register', Controller.postRegisterHandler);

router.get('/login', Controller.getLoginHandler);
router.post('/login', Controller.postLoginHandler);
router.get('/logout', Controller.getLogoutHandler);


// router.use('/challenge', challengeRouter);

module.exports = router;