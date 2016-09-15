'use strict';
const angular = require('angular');

export class chatComponent {
  /*@ngInject*/
  constructor() {
    this.messages = [
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"},
      {date: "12-14-14", author: "Vasya Pupkin", message: "Cool"}
    ];
  }
}

export default angular.module('partymakerApp.chat', [])
  .component('chat', {
    template: require('./chat.component.html'),
    bindings: { },
    controller: chatComponent
  })
  .name;
