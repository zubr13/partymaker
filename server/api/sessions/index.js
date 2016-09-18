'use strict';

var express = require('express');
var controller = require('./sessions.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);
router.put('/:id/addmessage', controller.addMessage);
router.put('/:id/addmember', controller.addMember);
router.put('/:id/addscore', controller.addScore);

module.exports = router;
