const db = require("../data/dbConfig.js");


module.exports = {
    add,
    destroy
};

 function add(pokemon) {
    return db("pokemon")
        .insert(pokemon, "id")
        .then(ids => ids[0]);
}



function destroy(id) {
    return null;
}

