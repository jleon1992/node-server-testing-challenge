const db = require('../data/db-config')
const Rappers = require('./rappers-model')

describe("rappers-model", () => {
    beforeEach(async () => {
        // empty table and reset primary key back to 1
        await db("rappers").truncate();
    });

    describe("insert()", () => {
        it("should add a rapper ", async () => {
            // truncate the table to make sure it's empty
            // happens in the beforeEach() global

            // make request, send data
            await Rappers.insert({
                name: "asher roth",
            });

            const rappers = await db("rappers");

            expect(rappers).toHaveLength(1);
            
        });
    });
});