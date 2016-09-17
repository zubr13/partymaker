'use strict';
const angular = require('angular');

/*@ngInject*/
export function profileService($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.profile = {};
  this.friends = [];
  this.videos = [];

  this.getUserById = id =>
    $http.get(`http://localhost:3000/api/users/${id}`)
      .then(response => response.data);

  this.getFriends = id =>
    $http.get(`http://localhost:3000/api/users/${id}`)
      .then(res => res.data);
}

export default angular.module('partymakerApp.profile-service', [])
  .service('profileService', profileService)
  .name;
