const express = require('express');
const router = express.Router();

const path = require('path');

const adminPredictionsController = require('../controllers/adminPredictionsController');



router.get('/predictions/:date', adminPredictionsController.getPredictions);
router.post('/predictions', adminPredictionsController.postPredictions);

module.exports = router;


