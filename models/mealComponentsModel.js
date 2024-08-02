const {db} = require('../config/knexconnect.js')

const getAllMealComponents = () => {
    return db('mealComponents')
    .select('meal_id', 'component_id', 'quantity')
    .orderBy('meal_id')
};

const insertMealComponent = (meal_id, component_id, quantity) => {
    return db('mealComponents')
    .insert({meal_id, component_id, quantity})
    .returning(['meal_id', 'component_id', 'quantity'])
};

const updateMealComponent = (meal_id, component_id, quantity) => {
    return db('mealComponents')
    .where({meal_id, component_id})
    .update({meal_id, component_id, quantity})
    .returning(['meal_id', 'component_id', 'quantity'])
};

const deleteMealComponent = (id) => {
    return db('mealComponents')
    .where({id})
    .del()
    .returning(['meal_id', 'component_id', 'quantity'])
};

module.exports = {
    getAllMealComponents,
    insertMealComponent,
    updateMealComponent,
    deleteMealComponent
};