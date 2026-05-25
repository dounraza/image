import request from 'supertest';
import app from '../app.js';
import path from 'path';

describe('POST /api/upload', () => {
  it('devrait retourner 400 si aucun fichier n\'est fourni', async () => {
    const res = await request(app).post('/api/upload');
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toBe(false);
  });

  it('devrait uploader un fichier avec succès', async () => {
    const res = await request(app)
      .post('/api/upload')
      .attach('image', Buffer.from('fake image content'), 'test.jpg');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.file).toHaveProperty('filename');
    expect(res.body.file).toHaveProperty('url');
    expect(res.body.file.url).toMatch(/^\/avatars\//);
  });
});
