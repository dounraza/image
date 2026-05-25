import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
  it('devrait retourner 200 et un message de succès', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Image Upload API is running');
  });
});
