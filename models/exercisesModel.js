const {db} = require('../config/knexconnect.js')

const getAllExercises = () => {
    return db('exercises')
    .select('id')
    .orderBy('name')
    .returning(['id', 'name', 'description', 'calories_lost', 'duration'])
};

const insertExercise = (name, description, calories_lost, duration) => {
    return db('exercises')
    .insert({name, description, calories_lost, duration})
    .returning(['id', 'name', 'description', 'calories_lost', 'duration'])
};

const updateExercise = (name, description, calories_lost, duration) => {
    return db('exercises')
    .where({id})
    .update({name, description, calories_lost, duration})
    .returning(['id', 'name', 'description', 'calories_lost', 'duration'])
};

const deleteExercise = (id) => {
    return db('exercises')
    .where({id})
    .del()
    .returning(['id', 'name', 'description', 'calories_lost', 'duration'])
};

module.exports = {
    getAllExercises,
    insertExercise,
    updateExercise,
    deleteExercise
};