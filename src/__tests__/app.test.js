import request from 'supertest';
import app from '../app';

describe('basic functionality', () => {
  test('Should return OK', () => {
    return request(app).get('/').expect(200);
  });
});
