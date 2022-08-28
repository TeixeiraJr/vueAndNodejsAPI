const express = require ('express');
const userController = require('./controller/userController');
const router = express.Router();

router.use(express.json());
router.post('/users', userController.createUser);
router.get('/users', (req, res) => res.json({message: 'conseguiu acessar a api \o/'}));


module.exports = router