'use strict';
const angular = require('angular');

/*@ngInject*/
export function videoServiceService($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.currentVideo = {};
  this.currentPlayMode = "";
	 // this.videos = [];

    this.getVideoById = function(id){
      return $http.get(`http://localhost:3000/api/videos/${id}`).then(response => response.data);
    }

    this.saveMessage = function(id, message){
      $http.put(`http://localhost:3000/api/sessions/${id}/addcomment`, message).then((response) => {
        console.log(response.data);
      });
    }

    this.createSession = function(data){
      return $http.post('http://localhost:3000/api/sessions',
       { video: {name: data.name, youtube: data.youtube, score: 1}}).then((response) => response.data);
    }

    this.getVideos = function(){
      return $http.get('http://localhost:3000/api/videos').then((response) => response.data);
    }

    this.getSessionById = function(id){
      return $http.get(`http://localhost:3000/api/sessions/${id}`).then((response) => response.data);
    }
}

export default angular.module('partymakerApp.video-service', [])
  .service('videoService', videoServiceService)
  .name;
