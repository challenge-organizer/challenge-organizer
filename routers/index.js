const router = require('express').Router();
const challengeRouter = require('./challenge');
const Controller = require('../controllers');


router.get('/', Controller.home);

router.get('/register', Controller.register);
router.post('/register', Controller.registerDone);

router.get('/login', Controller.loginForm);
router.post('/login', Controller.login);
router.get('/logout', Controller.logout);


router.use('/challenge', challengeRouter);

module.exports = router;