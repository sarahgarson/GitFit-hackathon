const express = require('express');
const {_getAllWorkoutExercises, _insertWorkoutExercise, _updateWorkoutExercise, _deleteWorkoutExercise} = require('../controllers/workoutExercisesController.js');

const router = express.Router();

router.get('/all', _getAllWorkoutExercises);
router.post('/create', _insertWorkoutExercise);
router.put('/update', _updateWorkoutExercise);
router.delete('/delete', _deleteWorkoutExercise);

module.exports = router;