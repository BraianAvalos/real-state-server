var express = require('express');
var router = express.Router();
const userController = require("../Controllers/User.controller")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createUser', userController.createUser )
router.get('/getUsers', userController.getAllUser)

module.exports = router;
