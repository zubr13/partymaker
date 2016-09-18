'use strict';
const angular = require('angular');
/* eslint no-sync: 0 */
export class friendsListComponent {
  /*@ngInject*/
  constructor(profileService, $stateParams, $scope, $http, Auth) {
    this.$scope = $scope;
    this.$http = $http;
    this.profileService = profileService;
    this.Auth = Auth;
    this.$stateParams = $stateParams;
    this.friends = profileService.friends;
    this.searchQuery;
    this.searchResults = [];
    this.profile;
    this.invites;
    this.me;
    this.getUser();
    this.getAnotherUser();
  }

  checkMe() {
    if(this.profile._id === this.$stateParams.id) {
      this.me = true;
    } else {
      this.me = false;
    }
    console.log(this.me);
  }

  searchFriends(name) {
    return this.$http.post('http://localhost:8888/api/users/search', { data: name })
      .then((res) => {
        this.searchResults = res.data;
      })
      .catch(() => {
        this.searchResults = 'Not found';
      });
  }

  addToFriends(name, _id) {
    if(!name && !_id) {
      return null;
    }
    if(this.$stateParams.id !== this.profile._id) {
      return null;
    }
    const friend = {};
    friend.name = name;
    friend._id = _id;
    return this.$http.post('http://localhost:8888/api/users/addfriend', { _id: this.profile._id, friend })
      .then(res => {
        console.log('OK');
      });
  }

  deleteFriend(friend) {
    if(!friend) {
      return null;
    }
    return this.$http.post('http://localhost:8888/api/users/deletefriend', {_id: this.profile._id, friend })
      .then(() => console.log('deleted'));
  }

  getUser() {
    this.Auth.getCurrentUser().then(data => {
      this.profile = data;
      this.invites = data.invites;
      this.checkMe();
    });
  }

  getAnotherUser() {
    if(!this.me) {
      this.$http.get(`http://localhost:8888/api/users/id/${this.$stateParams.id}`)
      .then(data => {
        this.profile = data.data;
        this.invites = data.data.invites;
        console.log(this.invites);
      });
    }
  }

}
friendsListComponent.$inject = ['profileService', '$stateParams', '$scope', '$http', 'Auth'];

export default angular.module('partymakerApp.friends-list', [])
  .component('friendsList', {
    template: require('./friends-list.component.html'),
    bindings: { friends: '<' },
    controller: friendsListComponent
  })
  .name;
