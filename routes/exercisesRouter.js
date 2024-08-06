const express = require("express");
const {
  _getAllExercises,
  _insertExercise,
  _updateExercise,
  _deleteExercise,
} = require("../controllers/exercisesController.js");


const router = express.Router();


router.get("/all", _getAllExercises);
router.post("/create", _insertExercise);
router.put("/update", _updateExercise);
router.delete("/delete", _deleteExercise);

module.exports = router;
