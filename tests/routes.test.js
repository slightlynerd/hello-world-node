const request = require('supertest')
const app = require('../app')

describe('Get page', () => {
  it('should return hello world', async (done) => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual('Hello world')
    done()
  })
})
