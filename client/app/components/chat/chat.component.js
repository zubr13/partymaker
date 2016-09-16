'use strict';
const angular = require('angular');

export class chatComponent {
  /*@ngInject*/
  constructor(socketService) {
    this.messages = [];
    
    this.socket = socketService.socket;

    this.socket.on('chat message', (msg) => {
        this.messages.push({date: "12-14-14", author: "Petya", message: msg});
    });
  }

  sendMessage(){
    this.socket.emit('chat message', this.messageValue);
    this.messageValue = '';
  }
}

export default angular.module('partymakerApp.chat', [])
  .component('chat', {
    template: require('./chat.component.html'),
    bindings: { },
    controller: chatComponent
  })
  .name;
