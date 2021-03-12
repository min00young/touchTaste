const express = require('express');
const usersCtrl = require('./users.ctrl');

const router = express.Router();

router.get('/:id', usersCtrl.find);
router.post('/', usersCtrl.write);

module.exports = router;
