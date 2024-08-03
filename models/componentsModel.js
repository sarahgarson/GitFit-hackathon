const { db } = require('../config/knexconnect.js');

const getAllComponents = () => {
    return db('components')
<<<<<<< Updated upstream
    .select('id', 'name', 'calories', 'protein', 'fat', 'sodium', 'created_by', 'created_at', 'updated_at')
=======
    .select('id')
>>>>>>> Stashed changes
    .orderBy('name')
    .returning(['id', 'name', 'calories', 'protein', 'fat', 'sodium', 'created_by', 'created_at', 'updated_at']);
};

const insertComponent = (name, calories, protein, fat, sodium, created_by, created_at, updated_at) => {
    return db('components')
    .insert({ name, calories, protein, fat, sodium, created_by, created_at, updated_at })
    .returning(['id', 'name', 'calories', 'protein', 'fat', 'sodium', 'created_by', 'created_at', 'updated_at']);
};

const updateComponent = (id, name, calories, protein, fat, sodium, created_by, created_at, updated_at) => {
    return db('components')
    .where({ id })
    .update({ name, calories, protein, fat, sodium, created_by, created_at, updated_at })
    .returning(['id', 'name', 'calories', 'protein', 'fat', 'sodium', 'created_by', 'created_at', 'updated_at']);
};

const deleteComponent = (id) => {
    return db('components')
    .where({ id })
    .del()
    .returning(['id', 'name', 'calories', 'protein', 'fat', 'sodium', 'created_by', 'created_at', 'updated_at']);
};

module.exports = {
    getAllComponents,
    insertComponent,
    updateComponent,
    deleteComponent
};