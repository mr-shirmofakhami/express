const express = require('express');
const router = express.Router();
const commentsController = require('../../controllers/admin/posts')
router.get('/',commentsController.index)
router.get('/create', commentsController.create);
router.post('/store', commentsController.store);
router.get('/delete/:postID', commentsController.remove);
router.get('/edit/:postID', commentsController.edit);
router.post('/update/:postID', commentsController.update);

module.exports = router;