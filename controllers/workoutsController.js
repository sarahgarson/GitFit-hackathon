const {getAllWorkouts, insertWorkout, updateWorkout, deleteWorkout} = require('../models/workoutsModel.js');

const _getAllWorkouts = async (req, res) => {
    try {
        const result = await getAllWorkouts();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'get all workouts failed'});
    }
};
const _insertWorkout = async (req, res) => {
    const {datetime, time, total_calories_lost, exercise_names} = req.body;
    try {
        const result = await insertWorkout(datetime, time, total_calories_lost, exercise_names);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'insert workout failed'});
    }
};

const _updateWorkout = async (req, res) => {
    const {id} = req.body;
    try {
        const result = await updateWorkout(id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'update workout failed'});
    }
};

const _deleteWorkout = async (req, res) => {
    const {id} = req.body;
    try {
        const result = await deleteWorkout(id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'delete workout failed'});
    }
};

module.exports = {
    _getAllWorkouts, _insertWorkout, _updateWorkout, _deleteWorkout
};