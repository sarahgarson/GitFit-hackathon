const {getAllWorkoutExercises, insertWorkoutExercise, updateWorkoutExercise, deleteWorkoutExercise} = require('../models/workoutExercisesModel.js');

const _getAllWorkoutExercises = async (req, res) => {
    try {
        const result = await getAllWorkoutExercises();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};
const _insertWorkoutExercise = async (req, res) => {
    const {workout_id, exercise_id} = req.body;
    try {
        const result = await insertWorkoutExercise(workout_id, exercise_id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _updateWorkoutExercise = async (req, res) => {
    const {workout_id, exercise_id} = req.body;
    try {
        const result = await updateWorkoutExercise(workout_id, exercise_id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _deleteWorkoutExercise = async (req, res) => {
    const {workout_id, exercise_id} = req.body;
    try {
        const result = await deleteWorkoutExercise(workout_id, exercise_id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

module.exports = {
    _getAllWorkoutExercises, _insertWorkoutExercise, _updateWorkoutExercise, _deleteWorkoutExercise
};