import request from 'supertest';
import app from '../app';

describe('basic functionality', () => {
  test('Should fail if payload is empty', () => {
    return request(app).post('/calculate').expect(400);
  });

  test('Should fail if payload is empty', () => {
    return request(app).post('/calculate')
      .send({expression: ["2"]})
      .end(function(err, res) {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.be.equal({result: '2'});
        done();
      });
  });
});
