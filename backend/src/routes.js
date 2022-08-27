const express = require ('express');
const userController = require('./controller/userController');
const router = express.Router();

router.use(express.json());
router.post('/users', userController.runExampleQueryNeo4j);


module.exports = router