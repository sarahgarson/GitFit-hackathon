const express = require('express');
const {_getAllComponents, _insertComponent, _updateComponent, _deleteComponent} = require('../controllers/componentsController.js');

const router = express.Router();

router.get('/all', _getAllComponents);
router.post('/create', _insertComponent);
router.put('/update', _updateComponent);
router.delete('/delete', _deleteComponent);

module.exports = router;