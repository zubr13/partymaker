'use strict';
const angular = require('angular');

export class chatComponent {
  /*@ngInject*/
  constructor(socketService, videoService) {
    
    this.socket = socketService.socket;

    this.socket.on('chat message', (msg) => {
        this.messages.push({date: new Date(), author: "Petya", message: msg});
    });

    this.videoService = videoService;

  }

  sendMessage(){
    this.socket.emit('chat message', this.messageValue);
    this.messageValue = '';
    this.videoService.saveMessage(this.session);
  }
}

export default angular.module('partymakerApp.chat', [])
  .component('chat', {
    template: require('./chat.component.html'),
    bindings: { messages: '<', session: '<'},
    controller: chatComponent
  })
  .name;
