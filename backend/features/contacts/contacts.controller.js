const Contacts = require('./contacts.model');

function getAll(req, res, next){
    Contacts.find().exec()
        .then(contacts => res.json(contacts))
        .catch( err => next(err));
}

function getContact(req, res, next){
    return res.json(req.contact);
}

function createContact(req, res, next){
    const { firstName, lastName, email } = req.body;
    const newContact = new Contacts({ firstName, lastName, email });
    newContact.save()
        .then(contact => res.json(contact))
        .catch(err => next(err));
}

function addContact(req, res, next, id) {
    Contacts.findById(id).exec()
        .then((contact) => {
            req.contact = contact;
            return next();
        })
        .catch(err => next(err));
}

function updateContact(req, res, next){
    const contact = req.contact;
    contact.firstName = req.body.firstName;
    contact.lastName = req.body.lastName;
    contact.email = req.body.email;

    contact.save()
        .then(contact => res.json(contact))
        .catch(err => next(err));
}

function deleteContact(req, res, next){
    const contact = req.contact;
    contact.remove()
        .then(contact => res.json(contact))
        .catch(err => next(err));
}

module.exports = { getAll, getContact, createContact, updateContact, deleteContact, addContact };
