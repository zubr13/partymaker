'use strict';
const angular = require('angular');

const uiBootstrap = require('angular-ui-bootstrap');
const uiRouter = require('angular-ui-router');
const animate = require('angular-animate');
const sanitize = require('angular-sanitize');



import routes from './common-watch.routes';
import videoList from './../components/video-list/video-list.component';
import commentsBlock from './../components/comments-block/comments-block.component';
import chat from './../components/chat/chat.component';
import videoService from './../video-service/video-service.service';

export class CommonWatchComponent {
  /*@ngInject*/
  constructor(videoService) {
    this.rate = 4;
    this.max = 5;
    this.isReadonly = false;
    this.currentVideo = videoService.currentVideo;
  }
}

CommonWatchComponent.$inject = ['videoService'];

export default angular.module('partymakerApp.common-watch', [uiBootstrap, uiRouter, animate, sanitize, videoList, commentsBlock, chat, videoService])
  .config(routes)
  .component('commonWatch', {
    template: require('./common-watch.html'),
    controller: CommonWatchComponent,
    controllerAs: 'commonWatchCtrl'
  })
  .name;
