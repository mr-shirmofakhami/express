const express = require('express');
const router = express.Router();
const usersController = require('@controllers/admin/users');
router.get('/',usersController.index);
router.get('/create', usersController.create);
router.post('/store', usersController.store);
router.get('/delete/:postID', usersController.remove);
router.get('/edit/:postID', usersController.edit);
router.post('/update/:postID', usersController.update);

module.exports = router;