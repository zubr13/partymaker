'use strict';
const angular = require('angular');
import videoPlayer from './../video-player/video-player.component';

export class videoListComponent {
  /*@ngInject*/
  constructor($state) {
    this.message = 'World';
    this.$state = $state;
  }

  createSession(){
    this.$state.go('common-watch');
  }
}

export default angular.module('video-list', [videoPlayer])
  .component('videoList', {
    template: require('./video-list.component.html'),
    bindings: { message: '<' },
    controller: videoListComponent
  })
  .name;
