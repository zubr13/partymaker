'use strict';
const angular = require('angular');

export class friendsListComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('partymakerApp.friends-list', [])
  .component('friendsList', {
    template: require('./friends-list.component.html'),
    bindings: { friends: '<' },
    controller: friendsListComponent
  })
  .name;
