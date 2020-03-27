const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')


describe('ONG', () => {
    beforeEach( async() =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });


    afterAll(async() =>{
        await connection.destroy();
    })
    it('shoulb be able to create a new ong', async  () =>{
        const response =await request(app)
        .post('/ongs')
        .send({
            name:"ongongong",
            email:"contato@gmail.com",
            whatsapp:"00123456789",
            city:"pato branco",
            uf:"PR" 
        });
        console.log(response.body)
        
        expect(response.body).toHaveLength(8);

    });
});