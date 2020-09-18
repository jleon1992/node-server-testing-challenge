const db = require('../data/db-config')

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(rapper) {
    return db("rappers")
        .insert(rapper, "id")
        .then(ids => ids[0]);
}

async function update(id, changes) {
    return null;
}

function remove(id) {
    return db('rappers').where({ id }).del()
}

function getAll() {
    return db("rappers");
}

function findById(id) {
    return db('rappers').where({ id }).first()
}
