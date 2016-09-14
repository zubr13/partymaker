'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('video', {
      url: '/video',
      template: '<video></video>'
    });
}
