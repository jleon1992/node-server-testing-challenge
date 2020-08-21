const db = require("../data/dbConfig.js");
const Pokemon = require("./pokemonModel.js");

describe("pokeMon", () => {
    beforeEach(async () => {
        // empty table and reset primary key back to 1
        await db("pokemon").truncate();
    });

    describe("add()", () => {
        it("should add a pokemon", async () => {
            // truncate the table to make sure it's empty
            // happens in the beforeEach() global

            // make request, send data
            await Pokemon.add({
                name: "slomow",
            });

            // check the hobbit is in the database (without using the GET / route)
            const pokemon = await db("pokemon");

            expect(pokemon).toHaveLength(1);
        });
    });
});
