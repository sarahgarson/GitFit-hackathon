const {db} = require('../config/knexconnect.js')

const getAllWorkoutExercises = () => {
    return db('workoutExercises')
    .select('workout_id', 'exercise_id')
    .orderBy('workout_id')
<<<<<<< Updated upstream
    .returning(['workout_id', 'exercise_id'])
=======
>>>>>>> Stashed changes
};

const insertWorkoutExercise = (workout_id, exercise_id) => {
    return db('workoutExercises')
    .insert({workout_id, exercise_id})
    .returning(['workout_id', 'exercise_id'])
};

const updateWorkoutExercise = (workout_id, exercise_id) => {
    return db('workoutExercises')
    .where({workout_id, exercise_id})
    .update({workout_id, exercise_id})
    .returning(['workout_id', 'exercise_id'])
};

const deleteWorkoutExercise = (id) => {
    return db('workoutExercises')
    .where({workout_id, exercise_id})
    .del()
    .returning(['workout_id', 'exercise_id'])
};

module.exports = {
    getAllWorkoutExercises,
    insertWorkoutExercise,
    updateWorkoutExercise,
    deleteWorkoutExercise
};