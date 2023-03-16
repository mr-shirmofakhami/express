const express = require('express');
const router = express.Router();

//routers
const dashboardController = require('./dashboard');
const postsRouter = require('./posts');
const usersRouter = require('./users');
const settingsRouter = require('./settings');
const commentsRouter = require('./comments');


router.use('/dashboard', dashboardController);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);
router.use('/users', usersRouter);
router.use('/settings', settingsRouter);


module.exports = router;