const {getAllExercises, insertExercise, updateExercise, deleteExercise} = require('../models/exercisesModel.js');

const _getAllExercises = async (req, res) => {
    try {
        const result = await getAllExercises();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'get all exercises failed'});
    }
};
const _insertExercise = async (req, res) => {
    const {name, description, calories_lost, duration} = req.body;
    try {
        const result = await insertExercise(name, description, calories_lost, duration);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _updateExercise = async (req, res) => {
    const {id, name, description, calories_lost, duration} = req.body;
    try {
        const result = await updateExercise(id, name, description, calories_lost, duration);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _deleteExercise = async (req, res) => {
    const {id} = req.body;
    try {
        const result = await deleteExercise(id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

module.exports = {
    _getAllExercises, _insertExercise, _updateExercise, _deleteExercise
};