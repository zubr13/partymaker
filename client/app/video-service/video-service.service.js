'use strict';
const angular = require('angular');

/*@ngInject*/
export function videoServiceService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.currentVideo = {};
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
        youtube: 'http://www.youtube.com/embed/sWOXYDBbz0g',
        url: "http://localhost:3000/video/2"
      },
      {
        id: 3,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/Z1ktxiqyiLA',
        url: "http://localhost:3000/video/3"
      },
      {
        id: 4,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/kzcyGNsj858',
        url: "http://localhost:3000/video/4"
      },
      {
        id: 5,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/DBjPIabiRNg',
        url: "http://localhost:3000/video/5"
      },
      {
        id: 6,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/RL_2FnIBVgI',
        url: "http://localhost:3000/video/6"
      },
      {
        id: 7,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/FIqXDNNBVv0',
        url: "http://localhost:3000/video/7"
      },
      {
        id: 8,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/IR6smI_YJDE',
        url: "http://localhost:3000/video/8"
      },
      {
        id: 9,
        name: 'Video',
        author: 'Author',
        youtube: 'http://www.youtube.com/embed/MhkGQAoc7bc',
        url: "http://localhost:3000/video/9"
      }
    ];

    this.getVideoById = function(id){
      for(let i = 0; i < this.videos.length; i++){
        if(this.videos[i].id == id){
          return this.videos[i];
        }
      }
    }
}

export default angular.module('partymakerApp.video-service', [])
  .service('videoService', videoServiceService)
  .name;
