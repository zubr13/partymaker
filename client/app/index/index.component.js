'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './index.routes';
import videoList from './../components/video-list/video-list.component';
import commonWatch from './../common-watch/common-watch.component';

export class IndexComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('partymakerApp.index', [uiRouter, videoList, commonWatch])
  .config(routes)
  .component('index', {
    template: require('./index.html'),
    controller: IndexComponent,
    controllerAs: 'indexCtrl'
  })
  .name;
