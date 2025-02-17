const Cliente = require('../models/Cliente');

const getAll = async () => {
    return await Cliente.find();
};

const save = async (data) => {
    return await Cliente.create(data);
};

const getById = async (id) => {
    return await Cliente.findById( id );
};

const update = async (id, data) => {
    await Cliente.update(id, data);
    return getById(id);
};

const remove = async (id) => {
    return await Cliente.findByIdAndDelete(id);
};

module.exports = { getAll, getById, save, update, remove };
