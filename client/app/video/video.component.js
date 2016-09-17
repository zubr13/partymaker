'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './video.routes';
import videoList from './../components/video-list/video-list.component';
import singleVideoPlayer from './../components/single-video-player/single-video-player.component';

export class VideoComponent {
  /*@ngInject*/
  constructor(videoService, $stateParams, $scope) {
    this.rate = 4;
    this.max = 5;
    this.$scope = $scope;
    this.isReadonly = false;
    this.videoService = videoService;
    this.$stateParams = $stateParams;
    this.videoId = $stateParams.id;
    this.video = {};
    this.getVideo();
  }

  getVideo(){
    this.videoService.getVideoById(this.$stateParams.id).then((data) => {
      this.video = data;
      this.$scope.$broadcast('videoLoaded', this.video);
    });
  }
}

VideoComponent.$inject = ['videoService', '$stateParams', '$scope'];

export default angular.module('partymakerApp.video', [uiRouter, videoList, singleVideoPlayer])
  .config(routes)
  .component('videoElement', {
    template: require('./video.html'),
    controller: VideoComponent,
    controllerAs: 'videoCtrl'
  })
  .name;
