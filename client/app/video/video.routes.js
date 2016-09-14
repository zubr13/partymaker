'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('video', {
      url: '/video/:id',
      template: '<video></video>'
    });
}
