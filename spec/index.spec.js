process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('GET /api/', function () {
  it('responds with 200', function (done) {
    request(app)
      .get('/api/')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(Object.keys(res.body)).to.eql(['endpoints']);
          done();
        }
      });
  });
});

describe('GET /api/levels/:level/questions', function () {
  it('should return all the questions for a given level', function (done) {
    request(app)
    .get('/api/levels/0/questions')
    .expect(200)
    .end((err, res) => {
      if (err) done(err);
      else {
        expect(res.body.questions).to.be.an('array');
        expect(res.body.questions.length).to.equal(5);
        done();
      }
    });
  });
});

describe('GET /api/users/:username', function () {
  it('should return a user object for a given username', function (done) {
    request(app)
    .get('/api/users/ninjabrian')
    .expect(200)
    .end((err, res) => {
      if (err) done(err);
      else {
        expect(res.body.user.username).to.equal('ninjabrian');
        done();
      }
    });
  });
});
