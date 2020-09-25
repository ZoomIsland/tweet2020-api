const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.tweets.index);
// router.post('/', ctrl.tweets.create);

module.exports = router;