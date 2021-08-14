const express = require('express');
const router = express.Router();

//INITIAL API AND HTML ROUTES
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes')

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
