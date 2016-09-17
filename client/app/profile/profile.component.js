'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './profile.routes';
import friendsList from './../components/friends-list/friends-list.component';

export class ProfileComponent {
  /*@ngInject*/
  constructor(profileService, $stateParams, $scope) {
    this.$scope = $scope;
    this.profileService = profileService;
    this.$stateParams = $stateParams;
    this.user = {};
    this.friends = [];
    this.getUser();
  }

  getUser() {
    this.profileService.getUserById(this.$stateParams.id)
      .then(data => {
        this.user = data;
        this.friends = data.friends;
        console.log(data);
      });
  }
}

ProfileComponent.$inject = ['profileService', '$stateParams', '$scope'];

export default angular.module('partymakerApp.profile', [uiRouter, friendsList])
  .config(routes)
  .component('profile', {
    template: require('./profile.html'),
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  })
  .name;
