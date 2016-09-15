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
        youtube: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com',
        url: "http://localhost:3000/video/1"
      },
      {
        id: 2,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com',
        url: "http://localhost:3000/video/2"
      },
      {
        id: 3,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com',
        url: "http://localhost:3000/video/3"
      },
      {
        id: 4,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com',
        url: "http://localhost:3000/video/4"
      },
      {
        id: 5,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com',
        url: "http://localhost:3000/video/5"
      },
      {
        id: 6,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com',
        url: "http://localhost:3000/video/6"
      },
      {
        id: 7,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com',
        url: "http://localhost:3000/video/7"
      },
      {
        id: 8,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com',
        url: "http://localhost:3000/video/8"
      },
      {
        id: 9,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com',
        url: "http://localhost:3000/video/9"
      }
    ];
  }
  shareVideo(url){
    console.log(url);
    this.sharedUrl = url;
  }
}
export default angular.module('video-list', [videoPlayer])
  .component('videoList', {
    template: require('./video-list.component.html'),
    bindings: { message: '<' },
    controller: videoListComponent
  })
  .name;
