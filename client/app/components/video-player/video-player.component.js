'use strict';
const angular = require('angular');

export class videoPlayerComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('partymakerApp.video-player', [])
  .component('videoPlayer', {
    template: require('./video-player.component.html'),
    bindings: { message: '<' },
    controller: videoPlayerComponent
  })
  .name;
