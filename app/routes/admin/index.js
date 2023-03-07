const express = require('express');
const router = express.Router();

//routers
const dashboardController = require('./dashboard');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');


router.use('/dashboard', dashboardController);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);
module.exports = router;