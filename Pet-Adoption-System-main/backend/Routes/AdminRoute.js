const express = require('express');
const router = express.Router();
const { getCredentials } = require('../Controllers/AdminController');

router.get('/credentials', getCredentials);

module.exports = router;