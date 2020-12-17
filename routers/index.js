const router = require('express').Router();
const challengeRouter = require('./challenge');
const Controller = require('../controllers');
const {
	isLoggedIn,
	isLoggedOut,
	isAdmin
} = require('../middlewares/auth');

router.get('/', Controller.getRootHandler);

router.use(isLoggedOut)
router.get('/register', Controller.getRegisterHandler);
router.post('/register', Controller.postRegisterHandler);

router.get('/login', Controller.getLoginHandler);
router.post('/login', Controller.postLoginHandler);
router.get('/logout', Controller.getLogoutHandler);


router.use('/challenge', challengeRouter);

module.exports = router;