/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/sessions              ->  index
 * POST    /api/sessions              ->  create
 * GET     /api/sessions/:id          ->  show
 * PUT     /api/sessions/:id          ->  upsert
 * PATCH   /api/sessions/:id          ->  patch
 * DELETE  /api/sessions/:id          ->  destroy
 * CUSTOM *****************************************
 * addComment /api/sessions/:id/addComment -> addComment to session
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Sessions from './sessions.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Sessionss
export function index(req, res) {
  return Sessions.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Sessions from the DB
export function show(req, res) {
  return Sessions.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Sessions in the DB
export function create(req, res) {
  return Sessions.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Sessions in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Sessions.findOneAndUpdate(req.params.id, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// addComment to session
export function addComment(req, res) {
  console.log(req.params)
  if(req.body._id) {
    delete req.body._id;
  }
  return Sessions.findOneAndUpdate({_id: req.params.id}, {$push: { chat: req.body }}, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Sessions in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Sessions.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Sessions from the DB
export function destroy(req, res) {
  return Sessions.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
