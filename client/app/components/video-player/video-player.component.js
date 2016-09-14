'use strict';
const angular = require('angular');

export class videoPlayerComponent {
  /*@ngInject*/
  constructor() {
     this.currentUrl = `http://localhost:3000/common-share/5`;
     this.isShareMode = false;
  }
}

export default angular.module('video-player', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .component('videoPlayer', {
    template: require('./video-player.component.html'),
    bindings: {url: '@', mini: '<', share: '<'},
    controller: videoPlayerComponent
  })
  .name;
