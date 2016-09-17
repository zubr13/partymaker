'use strict';
const angular = require('angular');

/*@ngInject*/
export function profileService($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.profile = {};
  this.friends = [];
  this.videos = [];
}

export default angular.module('partymakerApp.profile', [])
  .service('profile', profileService)
  .name;
