'use strict';
const angular = require('angular');

export class commentsBlockComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
    this.comments = [
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"}, 
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"}, 
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"}, 
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"}
    ];
  }
}

export default angular.module('partymakerApp.comments-block', [])
  .component('commentsBlock', {
    template: require('./comments-block.component.html'),
    bindings: { message: '<' },
    controller: commentsBlockComponent
  })
  .name;
