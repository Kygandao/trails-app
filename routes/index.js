const express = require('express');
const router = express.Router();

//ROUTES
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

module.exports = router;
