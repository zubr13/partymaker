'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('index', {
      url: '/',
      template: '<index></index>'
    });
}
