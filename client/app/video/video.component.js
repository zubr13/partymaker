'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './video.routes';
import videoList from './../components/video-list/video-list.component';

export class VideoComponent {
  /*@ngInject*/
  constructor(videoService, $stateParams) {
    this.rate = 4;
    this.max = 5;
    this.isReadonly = false;
    this.video = videoService.getVideoById($stateParams.id);
    console.log(this.video);
  }
}

VideoComponent.$inject = ['videoService', '$stateParams'];

export default angular.module('partymakerApp.video', [uiRouter, videoList])
  .config(routes)
  .component('videoElement', {
    template: require('./video.html'),
    controller: VideoComponent,
    controllerAs: 'videoCtrl'
  })
  .name;
