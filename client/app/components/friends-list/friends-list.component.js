'use strict';
const angular = require('angular');

export class friendsListComponent {
  /*@ngInject*/
  constructor(profileService, $stateParams, $scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
    this.profileService = profileService;
    this.$stateParams = $stateParams;
    this.friends = profileService.friends;
  }
}
friendsListComponent.$inject = ['profileService', '$stateParams', '$scope', '$http'];

export default angular.module('partymakerApp.friends-list', [])
  .component('friendsList', {
    template: require('./friends-list.component.html'),
    bindings: { friends: '<' },
    controller: friendsListComponent
  })
  .name;
