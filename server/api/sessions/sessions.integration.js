'use strict';

var app = require('../..');
import request from 'supertest';

var newSessions;

describe('Sessions API:', function() {
  describe('GET /api/sessions', function() {
    var sessionss;

    beforeEach(function(done) {
      request(app)
        .get('/api/sessions')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sessionss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      sessionss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/sessions', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/sessions')
        .send({
          name: 'New Sessions',
          info: 'This is the brand new sessions!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSessions = res.body;
          done();
        });
    });

    it('should respond with the newly created sessions', function() {
      newSessions.name.should.equal('New Sessions');
      newSessions.info.should.equal('This is the brand new sessions!!!');
    });
  });

  describe('GET /api/sessions/:id', function() {
    var sessions;

    beforeEach(function(done) {
      request(app)
        .get(`/api/sessions/${newSessions._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sessions = res.body;
          done();
        });
    });

    afterEach(function() {
      sessions = {};
    });

    it('should respond with the requested sessions', function() {
      sessions.name.should.equal('New Sessions');
      sessions.info.should.equal('This is the brand new sessions!!!');
    });
  });

  describe('PUT /api/sessions/:id', function() {
    var updatedSessions;

    beforeEach(function(done) {
      request(app)
        .put(`/api/sessions/${newSessions._id}`)
        .send({
          name: 'Updated Sessions',
          info: 'This is the updated sessions!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSessions = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSessions = {};
    });

    it('should respond with the original sessions', function() {
      updatedSessions.name.should.equal('New Sessions');
      updatedSessions.info.should.equal('This is the brand new sessions!!!');
    });

    it('should respond with the updated sessions on a subsequent GET', function(done) {
      request(app)
        .get(`/api/sessions/${newSessions._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let sessions = res.body;

          sessions.name.should.equal('Updated Sessions');
          sessions.info.should.equal('This is the updated sessions!!!');

          done();
        });
    });
  });

  describe('PATCH /api/sessions/:id', function() {
    var patchedSessions;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/sessions/${newSessions._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Sessions' },
          { op: 'replace', path: '/info', value: 'This is the patched sessions!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSessions = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSessions = {};
    });

    it('should respond with the patched sessions', function() {
      patchedSessions.name.should.equal('Patched Sessions');
      patchedSessions.info.should.equal('This is the patched sessions!!!');
    });
  });

  describe('DELETE /api/sessions/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/sessions/${newSessions._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when sessions does not exist', function(done) {
      request(app)
        .delete(`/api/sessions/${newSessions._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
