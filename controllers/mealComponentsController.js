const {getAllMealComponents, insertMealComponent, updateMealComponent, deleteMealComponent} = require('../models/mealComponentsModel.js');

const _getAllMealComponents = async (req, res) => {
    try {
        const result = await getAllMealComponents();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};
const _insertMealComponent = async (req, res) => {
    const {meal_id, component_id, quantity} = req.body;
    try {
        const result = await insertMealComponent(meal_id, component_id, quantity);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _updateMealComponent = async (req, res) => {
    const {meal_id, component_id, quantity} = req.body;
    try {
        const result = await updateMealComponent(meal_id, component_id, quantity);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _deleteMealComponent = async (req, res) => {
    const {meal_id} = req.body;
    try {
        const result = await deleteMealComponent(meal_id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

module.exports = {
    _getAllMealComponents, _insertMealComponent, _updateMealComponent, _deleteMealComponent
};