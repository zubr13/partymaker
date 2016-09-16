'use strict';
const angular = require('angular');

const uiBootstrap = require('angular-ui-bootstrap');
const uiRouter = require('angular-ui-router');
const animate = require('angular-animate');
const sanitize = require('angular-sanitize');



import singleVideoPlayer from './../components/single-video-player/single-video-player.component';
import routes from './common-watch.routes';
import videoList from './../components/video-list/video-list.component';
import commentsBlock from './../components/comments-block/comments-block.component';
import chat from './../components/chat/chat.component';
import videoService from './../video-service/video-service.service';
import socket from './../../components/socket/socket.service';

export class CommonWatchComponent {
  /*@ngInject*/
  constructor(videoService, socketService) {
    this.rate = 4;
    this.max = 5;
    this.isReadonly = false;
    this.currentVideo = videoService.currentVideo;
    socketService.syncUpdates();
  }
}

CommonWatchComponent.$inject = ['videoService', 'socketService'];

export default angular.module('partymakerApp.common-watch', [uiBootstrap, uiRouter, animate, sanitize,
 singleVideoPlayer, videoList, commentsBlock, chat, videoService, socket])
  .config(routes)
  .component('commonWatch', {
    template: require('./common-watch.html'),
    controller: CommonWatchComponent,
    controllerAs: 'commonWatchCtrl'
  })
  .name;
