const express = require('express');
const {_getAllMealComponents, _insertMealComponent, _updateMealComponent, _deleteMealComponent} = require('../controllers/mealComponentsController.js');

const router = express.Router();

//-----------------------------------------------

//SECTION FOR ADDING THE TABLES TO FRONTEND

const { getMealComponents } = require('../config/knexconnect');

router.get('/api/meal_components', async (req, res) => {
  try {
      const components = await getMealComponents();
      res.json(components);
  } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Error fetching meal components');
  }
});

//-----------------------------------------------

router.get('/all', _getAllMealComponents);
router.post('/create', _insertMealComponent);
router.put('/update', _updateMealComponent);
router.delete('/delete', _deleteMealComponent);

module.exports = router;