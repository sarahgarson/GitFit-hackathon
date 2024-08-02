const {getAllComponents, insertComponent, updateComponent, deleteComponent} = require('../models/componentsModel.js');

const _getAllComponents = async (req, res) => {
    try {
        const result = await getAllComponents();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};
const _insertComponent = async (req, res) => {
    const {name, calories, protein, fat, sodium, created_by, created_at, updated_at} = req.body;
    try {
        const result = await insertComponent(name, calories, protein, fat, sodium, created_by, created_at, updated_at);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _updateComponent = async (req, res) => {
    const {id, name, calories, protein, fat, sodium, created_by, created_at, updated_at} = req.body;
    try {
        const result = await updateComponent(id, name, calories, protein, fat, sodium, created_by, created_at, updated_at);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _deleteComponent = async (req, res) => {
    const {id} = req.body;
    try {
        const result = await deleteComponent(id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

module.exports = {
    _getAllComponents, _insertComponent, _updateComponent, _deleteComponent
};