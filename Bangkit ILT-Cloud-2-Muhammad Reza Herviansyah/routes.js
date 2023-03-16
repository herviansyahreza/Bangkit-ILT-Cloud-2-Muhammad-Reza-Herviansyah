const { addContactHandler, getAllContactHandler, deleteContactByIdHandler } = require('./handler');

const routes = [
    {
    method: 'POST',
    path: '/contact',
    handler: addContactHandler,
    },

    {
        method: 'GET',
        path: '/contact',
        handler: getAllContactHandler,
    },

    {
        method: 'DELETE',
        path: '/contact/{id}',
        handler: deleteContactByIdHandler,
    },
];



module.exports = routes;