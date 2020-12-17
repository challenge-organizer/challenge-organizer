const router = require('express').Router();
const challengeRouter = require('./challenge');
const userRouter = require('./user')
const Controller = require('../controllers');

const {
	isLoggedIn,
	isLoggedOut,
	isAdmin
} = require('../middlewares/auth');

router.get('/', Controller.getRootHandler);

router.get('/register', Controller.getRegisterHandler);
router.post('/register', Controller.postRegisterHandler);
router.get('/logout', Controller.getLogoutHandler);
// router.use(isLoggedOut)

router.get('/login', isLoggedOut, Controller.getLoginHandler);
router.post('/login', isLoggedOut, Controller.postLoginHandler);

router.use('/user', isLoggedIn, userRouter)
router.use('/challenge', isLoggedIn, challengeRouter);

module.exports = router;