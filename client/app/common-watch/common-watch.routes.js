'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('common-watch', {
      url: '/common-watch',
      template: '<common-watch></common-watch>'
    });
}
