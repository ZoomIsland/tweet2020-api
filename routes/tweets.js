const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.tweets.index);

module.exports = router;