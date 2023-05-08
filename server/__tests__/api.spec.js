const request = require('supertest')
const app = require('../app')
// then  importing app

describe('api server', () => {
  let api

  // jest hook - it runs before all tests,
  // i want my server to be running before testing all the api
  // the port must be different from your current port number
  beforeAll(() => {
    api = app.listen(4000, () => {
      console.log('Test server running on port 5000')
    })
  })
  // after running all the tests, i dont want it run anymore
  afterAll((done) => {
    console.log('Gracefully stopping test server')
    api.close(done)
    // close it with done, make sure that its closed with connection
  })

  // it('responds to get / with status 200', (done) => {
  //   request(api).get('/').expect(200, done)
  // })

  // it('responds to get /entries with status 200', (done) => {
  //   request(api)
  //     .get('/entries')
  //     .end((err, response) => {
  //       expect(response.statusCode).toBe(200)
  //       done()
  //     })
  // })

  it('responds to get /entries with status 200', (done) => {
    request(api).get('/entries').expect(200, done)
  }) // checks if the success returns with 200

  it('responds to get /entries with json', (done) => {
    request(api).get('/entries').expect('Content-Type', /json/, done)
  }) // this checks if the content type if the word contains json

  //error
  it('throws an error when there are no diary entries', () => {
    request(api)
      .get('/entries')
      .expect(500)
      .expect('no diary entries have been made', { exact: false })
  })
  it('responds to invalid method request with 405', (done) => {
    request(api).post('/entries').expect(400, done)
  })
})
