'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('create-video', {
      url: '/create-video',
      template: '<create-video></create-video>'
    });
}
