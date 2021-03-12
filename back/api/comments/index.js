const express = require('express');
const commentsCtrl = require('./comments.ctrl');

const router = express.Router();

router.get('/', commentsCtrl.list);
router.post('/', commentsCtrl.write);
router.put('/:id', commentsCtrl.update);
router.delete('/:id', commentsCtrl.delete);

module.exports = router;
