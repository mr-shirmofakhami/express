const express = require('express');
const router = express.Router();
const settingsController = require('@controllers/admin/settings');
router.get('/',settingsController.index);


module.exports = router;