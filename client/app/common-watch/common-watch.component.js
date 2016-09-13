'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './common-watch.routes';
import videoList from './../components/video-list/video-list.component';

export class CommonWatchComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('partymakerApp.common-watch', [uiRouter, videoList])
  .config(routes)
  .component('commonWatch', {
    template: require('./common-watch.html'),
    controller: CommonWatchComponent,
    controllerAs: 'commonWatchCtrl'
  })
  .name;
