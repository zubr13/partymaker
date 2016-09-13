'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sessionsCtrlStub = {
  index: 'sessionsCtrl.index',
  show: 'sessionsCtrl.show',
  create: 'sessionsCtrl.create',
  upsert: 'sessionsCtrl.upsert',
  patch: 'sessionsCtrl.patch',
  destroy: 'sessionsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sessionsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './sessions.controller': sessionsCtrlStub
});

describe('Sessions API Router:', function() {
  it('should return an express router instance', function() {
    sessionsIndex.should.equal(routerStub);
  });

  describe('GET /api/sessions', function() {
    it('should route to sessions.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sessionsCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/sessions/:id', function() {
    it('should route to sessions.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'sessionsCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/sessions', function() {
    it('should route to sessions.controller.create', function() {
      routerStub.post
        .withArgs('/', 'sessionsCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/sessions/:id', function() {
    it('should route to sessions.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'sessionsCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/sessions/:id', function() {
    it('should route to sessions.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'sessionsCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/sessions/:id', function() {
    it('should route to sessions.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'sessionsCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
