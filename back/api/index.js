const express = require('express');

const router = express.Router();

const markets = require('./markets');
const users = require('./users');
const comments = require('./comments');

router.use('/markets', markets);
router.use('/users', users);
router.use('/comments', comments);

module.exports = router;
