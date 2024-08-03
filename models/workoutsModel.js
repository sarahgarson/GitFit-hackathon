const {db} = require('../config/knexconnect.js')

const getAllWorkouts = () => {
    return db('workouts')
<<<<<<< Updated upstream
    .select('id', 'datetime', 'time', 'total_calories_lost', 'exercise_names')
    .orderBy('datetime')
    .returning(['id', 'datetime', 'time', 'total_calories_lost', 'exercise_names'])
=======
    .select('datetime', 'time', 'total_calories_lost', 'exercise_names')
    .orderBy('workout_id')
>>>>>>> Stashed changes
};

const insertWorkout = (datetime, time, total_calories_lost, exercise_names) => {
    return db('workouts')
    .insert({datetime, time, total_calories_lost, exercise_names})
    .returning(['id', 'datetime', 'time', 'total_calories_lost', 'exercise_names'])
};

const updateWorkout = (datetime, time, total_calories_lost, exercise_names) => {
    return db('workouts')
    .where({id})
    .update({datetime, time, total_calories_lost, exercise_names})
    .returning(['id', 'datetime', 'time', 'total_calories_lost', 'exercise_names'])
};

const deleteWorkout = (id) => {
    return db('workouts')
    .where({id})
    .del()
    .returning(['id', 'datetime', 'time', 'total_calories_lost', 'exercise_names'])
};

module.exports = {
    getAllWorkouts,
    insertWorkout,
    updateWorkout,
    deleteWorkout
};