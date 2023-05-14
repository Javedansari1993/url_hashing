const request = require('supertest');
const app = require('../app');

describe('URL Controller', () => {
  it('should render the home page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('URL Hashing System');
  });

  it('should generate a hashed URL', async () => {
    const response = await request(app)
      .post('/hash')
      .send({ url: 'http://localhost:3000/' })
  });

  it('should redirect to the original URL', async () => {
    const response = await request(app)
      .post('/hash')
      .send({ url: 'http://localhost:3000/' })
  });

  it('should return 404 for non-existent hashed URLs', async () => {
    await request(app)
      .get('/nonexistenthash')
      .expect(404);
  });
});
