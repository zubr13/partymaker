'use strict';
const angular = require('angular');
import videoPlayer from './../video-player/video-player.component';

export class videoListComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
    this.sessionNumber = Math.floor(Math.random() * 10);
    this.sharedUrl = '';
    this.videos = [
      {
        id: 1,
        name: 'Video',
        author: 'Author',
        url: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      },
      {
        id: 2,
        name: 'Video',
        author: 'Author',
        url: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      },
      {
        id: 3,
        name: 'Video',
        author: 'Author',
        url: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      },
      {
        id: 4,
        name: 'Video',
        author: 'Author',
        url: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      },
      {
        id: 5,
        name: 'Video',
        author: 'Author',
        url: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      },
      {
        id: 6,
        name: 'Video',
        author: 'Author',
        url: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      },
      {
        id: 7,
        name: 'Video',
        author: 'Author',
        url: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      },
      {
        id: 8,
        name: 'Video',
        author: 'Author',
        url: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      }
    ];
  }
  shareVideo(id){
    this.sharedUrl = `id`;
  }
}
export default angular.module('video-list', [videoPlayer])
  .component('videoList', {
    template: require('./video-list.component.html'),
    bindings: { message: '<' },
    controller: videoListComponent
  })
  .name;
