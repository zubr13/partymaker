'use strict';
const angular = require('angular');
/* eslint no-sync: 0 */
export class friendsListComponent {
  /*@ngInject*/
  constructor(profileService, $stateParams, $scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
    this.profileService = profileService;
    this.$stateParams = $stateParams;
    this.friends = profileService.friends;
    this.searchQuery = '';
    this.searchResults = [];
    this.searchFriends();
    this.addToFriends();
  }

  searchFriends(name) {
    console.log(name);
    return this.$http.post('http://localhost:3000/api/users/search', { data: name })
      .then((res) => {
        this.searchResults = res.data;
        console.log(this.searchResults);
      })
      .catch(() => {
        this.searchResults = 'Not found';
      });
  }

  addToFriends(name, _id) {
    const friend = {};
    friend.name = name;
    friend._id = _id;
    console.log(friend);
    return this.$http.post('http://localhost:3000/api/users/addfriend', { _id: this.$stateParams.id, friend })
      .then(res => {
        console.log(res.data);
      });
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
