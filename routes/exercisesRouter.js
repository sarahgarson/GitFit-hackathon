const express = require('express');
const {_getAllExercises, _insertExercise, _updateExercise, _deleteExercise} = require('../controllers/exercisesController.js');

const router = express.Router();

//----------------------------------------

const { getExercises} = require('../config/knexconnect');

router.get('/', async (req, res) => {
  try {
      const exercises = await getExercises();
      res.json(exercises);
  } catch (error) {
      res.status(500).send('Error fetching exercises');
  }
});


//---------------------------------------


router.get('/all', _getAllExercises);
router.post('/create', _insertExercise);
router.put('/update', _updateExercise);
router.delete('/delete', _deleteExercise);

module.exports = router;