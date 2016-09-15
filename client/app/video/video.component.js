'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './video.routes';
import videoList from './../components/video-list/video-list.component';
import singleVideoPlayer from './../components/single-video-player/single-video-player.component';

export class VideoComponent {
  /*@ngInject*/
  constructor(videoService, $stateParams) {
    this.rate = 4;
    this.max = 5;
    this.isReadonly = false;
    this.video = videoService.getVideoById($stateParams.id);
  }
}

VideoComponent.$inject = ['videoService', '$stateParams'];

export default angular.module('partymakerApp.video', [uiRouter, videoList, singleVideoPlayer])
  .config(routes)
  .component('videoElement', {
    template: require('./video.html'),
    controller: VideoComponent,
    controllerAs: 'videoCtrl'
  })
  .name;
