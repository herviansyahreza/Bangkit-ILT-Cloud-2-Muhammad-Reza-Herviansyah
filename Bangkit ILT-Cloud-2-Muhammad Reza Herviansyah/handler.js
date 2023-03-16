const contact = require('./contact');

const addContactHandler = (request, h) => {
    const { id, name, email, phone } = request.payload;

    const newContact = {
        id, name, email, phone,
    };
    contact.push(newContact);

    const isSuccess = contact.filter((contact) => contact.id === id).length > 0;

if (isSuccess) {
    const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
        contactId: id,
        },
    });
    response.code(201);
    return response;
}
const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
});
response.code(500);
return response;
};

const getAllContactHandler = () => ({
    status: 'success',
    data: {
    contact,
    },
});

const deleteContactByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = contact.findIndex((note) => note.id === id);

    if (index !== -1) {
        contact.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil dihapus',
    });
    response.code(200);
    return response;
}

const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan',
});
response.code(404);
return response;
};

module.exports = { 
    addContactHandler, 
    getAllContactHandler, 
    deleteContactByIdHandler 
};