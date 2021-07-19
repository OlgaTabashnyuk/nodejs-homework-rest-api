const express = require('express');
const router = express.Router();

const { contacts: ctrl } = require('../../controllers');

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', express.json(), ctrl.addNewContact);

router.delete('/:contactId', express.json(), ctrl.deleteContact);

router.patch('/:contactId/favorite', express.json(), ctrl.updateStatusContact);

router.put('/:contactId', express.json(), ctrl.update);

module.exports = router;
