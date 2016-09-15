'use strict';
const angular = require('angular');

export class singleVideoPlayerComponent {
  /*@ngInject*/
  constructor(videoService) {
    this.videoService = videoService;
    this.videoId = this.parseUrl(this.youtube);
    this.player = new YT.Player('player', {
      width: 700,
      height: 500,
      videoId: this.videoId,
      events: {
            'onStateChange': this.onPlayerStateChange.bind(this)
      }
    }); 
  }

  onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PAUSED) {
          this.videoService.currentPlayMode = "pause";
        }
        if (event.data == YT.PlayerState.PLAYING) {
          this.videoService.currentPlayMode = "play";
        }
      }

  parseUrl(url){
    const parts = url.split(new RegExp('[/:?=&-]', 'g'));
    for(let i = 0; i < parts.length; i++){
      if(parts[i].indexOf('embed') !== -1){
        return parts[i + 1];
      }
    }
  }
}

export default angular.module('partymakerApp.single-video-player', [])
  .component('singleVideoPlayer', {
    template: require('./single-video-player.component.html'),
    bindings: { youtube: '@' },
    controller: singleVideoPlayerComponent
  })
  .name;
