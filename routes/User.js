const router = require('express').Router();
const { Login, SignUp } = require('../controllers/User');
router.post('/login', Login);
router.post('/signUp', SignUp);
router.get('/login', Login);
router.get('/signUp', SignUp);

module.exports = router;
