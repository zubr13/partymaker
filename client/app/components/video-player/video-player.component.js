'use strict';
const angular = require('angular');

export class videoPlayerComponent {
  /*@ngInject*/
  constructor($state) {
    this.$state = $state;
  }

  createSession(){
    console.log('go');
    this.$state.go('common-watch');
  }
}

export default angular.module('video-player', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .component('videoPlayer', {
    template: require('./video-player.component.html'),
    bindings: {url: '@', mini: '<'},
    controller: videoPlayerComponent
  })
  .name;