'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './video.routes';

export class VideoComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('partymakerApp.video', [uiRouter])
  .config(routes)
  .component('video', {
    template: require('./video.html'),
    controller: VideoComponent,
    controllerAs: 'videoCtrl'
  })
  .name;
