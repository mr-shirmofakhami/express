const express = require('express');
const router = express.Router();

//routers
const postRouter = require('./posts');
const dashboardController = require('./dashboard');

router.use('/dashboard', dashboardController);
router.use('/posts', postRouter);
module.exports = router;