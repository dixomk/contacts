const router = require('express').Router();
const controller = require('./contacts.controller');
const validateMiddleware = require('./validation.middleware');

router.route('/contacts')
    .get(controller.getAll)
    .post(validateMiddleware, controller.createContact);

router.route('/contacts/:id')
    .get(controller.getContact)
    .put(validateMiddleware, controller.updateContact)
    .delete(controller.deleteContact);

router.param('id', controller.addContact);

module.exports = router;
