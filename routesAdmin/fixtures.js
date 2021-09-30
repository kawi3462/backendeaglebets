const express = require('express');
const router = express.Router();

const path = require('path');

const adminFixturesController = require('../controllers/adminFixturesController');

router.get('/fixtures/:date', adminFixturesController.getFixtures);
router.post('/fixtures', adminFixturesController.postFixtures);

module.exports = router;





