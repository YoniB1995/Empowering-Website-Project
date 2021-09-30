const chai = require('chai')
const ChaiHttp = require('chai-http')
const server = require('../server')

chai.should();

chai.use(ChaiHttp)

describe('Team API Controller', (done)=> {

    describe('GET /team/english', ()=> {
        it('it should get all team members in english', (done)=> {
             chai.request(server)
            .get('/team/english')
            .end((err,response)=> {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
        })

        it('it should NOT get all team members in english', (done)=> {
            chai.request(server)
            .get('/team/notenglish')
            .end((err,response)=> {
                response.should.have.status(404);
                done();
            })
        })
    })

})