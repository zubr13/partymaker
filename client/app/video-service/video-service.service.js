'use strict';
const angular = require('angular');

/*@ngInject*/
export function videoServiceService($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.currentVideo = {};
  this.currentPlayMode = "";
	 // this.videos = [];

    this.getVideoById = (id) => {
      return $http.get(`http://localhost:3000/api/videos/${id}`).then(response => response.data);
    }

    this.saveMessage = (id, message) => {
      $http.put(`http://localhost:3000/api/sessions/${id}/addmessage`, message).then((response) => {
        console.log(response.data);
      });
    }

    this.addComment = (id, comment) => {
      return $http.put(`http://localhost:3000/api/videos/${id}/addcomment`, comment).then(response => response.data);
    }

    this.createSession = (data, user) => {
      return $http.post('http://localhost:3000/api/sessions',
       { creator: user.name, video: {name: data.name, youtube: data.youtube, score: 1}}).then((response) => response.data);
    }

    this.getVideos = () => {
      return $http.get('http://localhost:3000/api/videos').then((response) => response.data);
    }

    this.getSessionById = (id) => {
      return $http.get(`http://localhost:3000/api/sessions/${id}`).then((response) => response.data);
    }

    this.createVideo = (video) => {
      return $http.post('http://localhost:3000/api/videos', video).then(response => response.data);
    }

    this.addSessionMember = (id, name) => {
      return $http.put(`http://localhost:3000/api/sessions/${id}/addmember`, {member: name});
    }

    this.addGrade = (id, grade) => {
      return $http.put(`http://localhost:3000/api/sessions/${id}/addscore`, {score: grade});
    }
}

export default angular.module('partymakerApp.video-service', [])
  .service('videoService', videoServiceService)
  .name;
