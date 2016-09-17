'use strict';
const angular = require('angular');

export class commentsBlockComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('partymakerApp.comments-block', [])
  .component('commentsBlock', {
    template: require('./comments-block.component.html'),
    bindings: { comments: '<' },
    controller: commentsBlockComponent
  })
  .name;
