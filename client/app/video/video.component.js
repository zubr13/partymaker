'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './video.routes';
import videoList from './../components/video-list/video-list.component';

export class VideoComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('partymakerApp.video', [uiRouter, videoList])
  .config(routes)
  .component('video', {
    template: require('./video.html'),
    controller: VideoComponent,
    controllerAs: 'videoCtrl'
  })
  .name;
