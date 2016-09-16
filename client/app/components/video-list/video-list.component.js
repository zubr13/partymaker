'use strict';
const angular = require('angular');
import videoPlayer from './../video-player/video-player.component';

export class videoListComponent {
  /*@ngInject*/
  constructor(videoService, $state) {
    this.message = 'World';
    this.sessionNumber = Math.floor(Math.random() * 10);
    this.sharedUrl = '';
    this.videoService = videoService;
    this.videos = videoService.videos;
    this.$state = $state;
  }

  shareVideo(url){
    console.log(url);
    this.sharedUrl = url;
  }

  goToVideo(video){
    this.videoService.currentVideo = video;
    this.videoService.createSession().then((data) => {
      this.$state.go(`common-watch`, {id: data._id});
    });
  }
}
export default angular.module('video-list', [videoPlayer])
  .component('videoList', {
    template: require('./video-list.component.html'),
    bindings: { message: '<' },
    controller: videoListComponent
  })
  .name;
