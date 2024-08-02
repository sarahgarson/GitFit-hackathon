const express = require('express');
const {_getAllMealComponents, _insertMealComponent, _updateMealComponent, _deleteMealComponent} = require('../controllers/mealComponentsController.js');

const router = express.Router();

router.get('/all', _getAllMealComponents);
router.post('/create', _insertMealComponent);
router.put('/update', _updateMealComponent);
router.delete('/delete', _deleteMealComponent);

module.exports = router;