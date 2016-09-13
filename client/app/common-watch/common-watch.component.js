'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './common-watch.routes';
import videoList from './../components/video-list/video-list.component';
import commentsBlock from './../components/comments-block/comments-block.component';
import chat from './../components/chat/chat.component';

export class CommonWatchComponent {
  /*@ngInject*/
  constructor() {
    
  }
}

export default angular.module('partymakerApp.common-watch', [uiRouter, videoList, commentsBlock, chat])
  .config(routes)
  .component('commonWatch', {
    template: require('./common-watch.html'),
    controller: CommonWatchComponent,
    controllerAs: 'commonWatchCtrl'
  })
  .name;
