const request = require('supertest')
const app = require('../app')

// then  importing app

// beforeAll & afterAll
// describe('api server', () => {
//   let api

//   // jest hook - it runs before all tests,
//   // i want my server to be running before testing all the api
//   // the port must be different from your current port number
//   beforeAll(() => {
//     api = app.listen(4000, () => {
//       console.log('Test server running on port 5000')
//     })
//   })
//   // after running all the tests, i dont want it run anymore
//   afterAll((done) => {
//     console.log('Gracefully stopping test server')
//     api.close(done)
//     // close it with done, make sure that its closed with connection
//   })

//   // it('responds to get / with status 200', (done) => {
//   //   request(api).get('/').expect(200, done)
//   // })

//   // it('responds to get /entries with status 200', (done) => {
//   //   request(api)
//   //     .get('/entries')
//   //     .end((err, response) => {
//   //       expect(response.statusCode).toBe(200)
//   //       done()
//   //     })
//   // })

//   it('responds to get /entries with status 200', (done) => {
//     request(api).get('/entries').expect(200, done)
//   }) // checks if the success returns with 200

//   it('responds to get /entries with json', (done) => {
//     request(api).get('/entries').expect('Content-Type', /json/, done)
//   }) // this checks if the content type if the word contains json

//   //error
//   it('throws an error when there are no diary entries', () => {
//     request(api)
//       .get('/entries')
//       .expect(500)
//       .expect('no diary entries have been made', { exact: false })
//   })
//   it('responds to invalid method request with 405', (done) => {
//     request(api).post('/entries').expect(400, done)
//   })
// })

describe('Test the api for diary endpoints', () => {
  it('should respond with success of 200', async () => {
    const response = await request(app)
      .get('/entries')
      .expect('Content-Type', /json/)
      // expects the word json
      .expect(200)
    // app object (express server )that we can pass into supertest function, which is request
    // must use await to wait for the result as it is an api
  })

  it('should respond with success of 200', async () => {
    const id = 193
    const response = await request(app)
      .get(`/entries/${id}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('should respond with 201 success', async () => {
    const add = {
      title: 'hello',
      entry_date: '2019-09-12',
      content: 'had a good day',
    }

    // this is the request that we pass to
    const response = await request(app)
      .post('/entries')
      .send(add)
      .expect('Content-Type', /json/)
      .expect(201)

    expect(response.body).toBe('entry added')
    // set of properties that match
  })

  // error

  it('should catch missing required properties', async () => {
    const response = await request(app)
      .post('/entries')
      .expect('Content-Type', /json/)
      .expect(400)
  })
})
