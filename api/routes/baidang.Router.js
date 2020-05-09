const express = require('express');
const router = express.Router();
const baiDangController = require('../controllers/baidang.Controller');
const upload = require('../middlewares/uploadImageBaiDang.Middleware');
const checkLogin = require('../middlewares/checkChuTroLogin.Middleware');

router.get('/',checkLogin,baiDangController.getAll);
router.get(':id/chitiet',checkLogin,baiDangController.getId);
router.post('/',checkLogin,upload.array('photos'),baiDangController.create);
router.delete('/:id/delete',checkLogin,baiDangController.delete);
module.exports = router;