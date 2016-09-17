'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './profile.routes';
// import friendsList from './../components/friends-list/friends-list.component';

export class ProfileComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('partymakerApp.profile', [uiRouter])
  .config(routes)
  .component('profile', {
    template: require('./profile.html'),
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  })
  .name;
