'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('common-watch', {
      url: '/common-watch/:id',
      template: '<common-watch></common-watch>'
    });
}
