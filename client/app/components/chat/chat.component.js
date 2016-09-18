'use strict';
const angular = require('angular');

export class chatComponent {
  /*@ngInject*/
  constructor(socketService, videoService) {
    
    this.socket = socketService.socket;

    this.socket.on('chat message', (msg) => {
        this.messages.push(msg);
        this.messageValue = '';
    });

    this.videoService = videoService;

  }

  sendMessage() {
    this.socket.emit('chat message', {date: new Date(), message: this.messageValue, author: this.user.name});
    const message = this.messageValue;
    this.messageValue = '';
    this.videoService.saveMessage(this.session, {message: message, author: this.user.name});
  }
}

export default angular.module('partymakerApp.chat', [])
  .component('chat', {
    template: require('./chat.component.html'),
    bindings: { messages: '<', session: '<', user: '<'},
    controller: chatComponent
  })
  .name;
