const request = require('supertest')
const db = require('../data/db-config');
const Rappers = require('./rappers-model')
const rapperRouter =  require('./rappers-router')
const server = require('../server')



describe('rappers router', () => {
    // beforeEach(async () => {
    //     // empty table and reset primary key back to 1
    //     await db("rappers").truncate();
    // });

    describe('post / route', () => {
        it('should return a status code of 201', async  () => {
        await request(server).post('/rappers').send({name: 'future'}).then(res => {
            expect(res.status).toBe(201)
        })
        })

    })
    describe('delete / route', () => {
        it('should return status code of 204', async () => {
            await request(server).delete('/rappers/1')
            .then(res => {
                expect(res.status).toBe(204)
            })
        })
        it('should return status code of 204', async () => {
            const count = await request(server).delete('/rappers/2')
            expect(count).toBeDefined()
      
        })
    })
})