'use strict';
const angular = require('angular');

export class chatComponent {
  /*@ngInject*/
  constructor(socketService, videoService) {
    
    this.socket = socketService.socket;

    this.socket.on('chat message', (msg) => {
        this.messages.push(msg);
    });

    this.videoService = videoService;

  }

  sendMessage(){
    this.socket.emit('chat message', {date: new Date(), message: this.messageValue, author: "Petya"});
    this.videoService.saveMessage(this.session, {message: this.messageValue, author: "Petya"});
    this.messageValue = '';
  }
}

export default angular.module('partymakerApp.chat', [])
  .component('chat', {
    template: require('./chat.component.html'),
    bindings: { messages: '<', session: '<'},
    controller: chatComponent
  })
  .name;
