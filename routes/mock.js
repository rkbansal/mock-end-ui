var express = require('express');
var router = express.Router();
const generateUsers = require('../controllers/mock/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', generateUsers);

router.get('/comments', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/articles', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
