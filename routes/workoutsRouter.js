const express = require('express');
const {_getAllWorkouts, _insertWorkout, _updateWorkout, _deleteWorkout} = require('../controllers/workoutsController.js');

const router = express.Router();

router.get('/all', _getAllWorkouts);
router.post('/create', _insertWorkout);
router.put('/update', _updateWorkout);
router.delete('/delete', _deleteWorkout);

module.exports = router;