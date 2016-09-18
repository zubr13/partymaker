'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', controller.show);
router.get('/id/:id', controller.showById);
router.post('/', controller.create);
router.put('/:id/addvideo', controller.addVideo);
router.put('/:id/addcomment', controller.addComment);
router.post('/search', controller.searchUsers);
router.post('/addfriend', controller.addToFriends);

module.exports = router;
