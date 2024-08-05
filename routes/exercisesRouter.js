const express = require("express");
const {
  _getAllExercises,
  _insertExercise,
  _updateExercise,
  _deleteExercise,
} = require("../controllers/exercisesController.js");
// const insertExercise = require('../models/exercisesModel.js');

const router = express.Router();

//----------------------------------------

// const { getExercises} = require('../config/knexconnect');

// router.get('/', async (req, res) => {
//   try {
//       const exercises = await getExercises();
//       res.json(exercises);
//   } catch (error) {
//       res.status(500).send('Error fetching exercises');
//   }
// });

// Create a new exercise
// router.post('/', async (req, res) => {
//   try {
//       const exercise = await insertExercise.create(req.body);
//       res.status(201).send(exercise);
//   } catch (error) {
//       res.status(400).send({ error: error.message });
//   }
// });
//---------------------------------------

router.get("/all", _getAllExercises);
router.post("/create", _insertExercise);
router.put("/update", _updateExercise);
router.delete("/delete", _deleteExercise);

module.exports = router;
