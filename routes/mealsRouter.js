const express = require('express');
const {_getAllMeals, _insertMeal, _updateMeal, _deleteMeal} = require('../controllers/mealsController.js');

const router = express.Router();

router.get('/all', _getAllMeals);
router.post('/create', _insertMeal);
router.put('/update', _updateMeal);
router.delete('/delete', _deleteMeal);

module.exports = router;