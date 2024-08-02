const {getAllMeals, insertMeal, updateMeal, deleteMeal} = require('../models/mealsModel.js');

const _getAllMeals = async (req, res) => {
    try {
        const result = await getAllMeals();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};
const _insertMeal = async (req, res) => {
    const {date_added} = req.body;
    try {
        const result = await insertMeal(date_added);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _updateMeal = async (req, res) => {
    const {id} = req.body;
    try {
        const result = await updateMeal(id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _deleteMeal = async (req, res) => {
    const {id} = req.body;
    try {
        const result = await deleteMeal(id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

module.exports = {
    _getAllMeals, _insertMeal, _updateMeal, _deleteMeal
};