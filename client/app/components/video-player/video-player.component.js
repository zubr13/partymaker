'use strict';
const angular = require('angular');

export class videoPlayerComponent {
  /*@ngInject*/
  constructor() {
     
  }
}

export default angular.module('video-player', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .component('videoPlayer', {
    template: require('./video-player.component.html'),
    bindings: {youtube: '@', mini: '<', share: '<', url: '<'},
    controller: videoPlayerComponent
  })
  .name;
