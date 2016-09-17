'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './create-video.routes';
import videoService from './../video-service/video-service.service';

export class CreateVideoComponent {
  /*@ngInject*/
  constructor(videoService, $state) {
    this.$state = $state;
    this.videoName = "";
    this.videoUrl = "";
    this.videoService = videoService;
  }

  createVideo(){
    const url = `http://www.youtube.com/embed/${this.parseUrl(this.videoUrl)}`;
    this.videoService.createVideo({name: this.videoName, youtube: url}).then(data => {
      this.$state.go('video', {id: data._id})
    });
  }

  parseUrl(url){
    const parts = url.split(new RegExp('[=]', 'g'));
    for(let i = 0; i < parts.length; i++){
      if(parts[i].indexOf('watch') !== -1){
        return parts[i + 1];
      }
    }
  }
}

CreateVideoComponent.$inject = ['videoService', '$state'];

export default angular.module('partymakerApp.create-video', [uiRouter, videoService])
  .config(routes)
  .component('createVideo', {
    template: require('./create-video.html'),
    controller: CreateVideoComponent,
    controllerAs: 'createVideoCtrl'
  })
  .name;
