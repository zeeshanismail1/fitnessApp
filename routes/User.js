const router = require('express').Router();
const { Login, SignUp, getUsers } = require('../controllers/User');
router.post('/login', Login);
router.post('/signUp', SignUp);
router.get('/login', getUsers);
router.get('/signUp', getUsers);

module.exports = router;
