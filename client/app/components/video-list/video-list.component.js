'use strict';
const angular = require('angular');
import videoPlayer from './../video-player/video-player.component';

export class videoListComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
    //this.$state = $state;
    this.sessionNumber = Math.floor(Math.random() * 10);
  }

  // createSession(){
  //   this.sessionNumber = 3;
  //   this.$state.go(`common-watch/${this.sessionNumber}`);
  // }
}

export default angular.module('video-list', [videoPlayer])
  .component('videoList', {
    template: require('./video-list.component.html'),
    bindings: { message: '<' },
    controller: videoListComponent
  })
  .name;
