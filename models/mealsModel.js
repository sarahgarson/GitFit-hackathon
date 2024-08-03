const {db} = require('../config/knexconnect.js')

const getAllMeals = () => {
    return db('meals')
    .select('id', 'date_added')
    .orderBy('date_added')
<<<<<<< Updated upstream
    .returning(['id', 'date_added'])
=======
>>>>>>> Stashed changes
};

const insertMeal = (date_added) => {
    return db('meals')
    .insert({date_added})
    .returning(['id', 'date_added'])
};

const updateMeal = (date_added) => {
    return db('meals')
    .where({id})
    .update({date_added})
    .returning(['id', 'date_added'])
};

const deleteMeal = (id) => {
    return db('meals')
    .where({id})
    .del()
    .returning(['id', 'date_added'])
};

module.exports = {
    getAllMeals,
    insertMeal,
    updateMeal,
    deleteMeal
};