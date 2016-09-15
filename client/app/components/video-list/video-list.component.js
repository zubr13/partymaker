'use strict';
const angular = require('angular');
import videoPlayer from './../video-player/video-player.component';

export class videoListComponent {
  /*@ngInject*/
  constructor(videoService) {
    this.message = 'World';
    this.sessionNumber = Math.floor(Math.random() * 10);
    this.sharedUrl = '';
    this.videoService = videoService;
    this.videos = videoService.videos;
  }

  shareVideo(url){
    console.log(url);
    this.sharedUrl = url;
  }

  goToVideo(video){
    this.videoService.currentVideo = video;
  }
}
export default angular.module('video-list', [videoPlayer])
  .component('videoList', {
    template: require('./video-list.component.html'),
    bindings: { message: '<' },
    controller: videoListComponent
  })
  .name;
