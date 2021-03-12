const express = require('express');
const marketsCtrl = require('./markets.ctrl');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'public/img/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1000 * 1024 * 1024 },
});

router.post('/', marketsCtrl.write);
router.put('/:id', marketsCtrl.update);
router.delete('/:id', marketsCtrl.delete);
router.get('/', marketsCtrl.list);
router.get('/:id', marketsCtrl.find);
router.get('/find/:companyName', marketsCtrl.search);
router.post('/favorite/like', marketsCtrl.like);
router.delete('/favorite/unlike', marketsCtrl.unlike);
router.post('/upload', upload.single('img'), marketsCtrl.upload);
router.get('/categories/:category', marketsCtrl.listByCategory);

module.exports = router;
