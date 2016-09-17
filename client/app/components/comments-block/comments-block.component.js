'use strict';
const angular = require('angular');

export class commentsBlockComponent {
  /*@ngInject*/
  constructor(videoService) {
    this.comment = '';
    this.videoService = videoService;
  }

  addComment(){
    this.videoService.addComment(this.comment).then(() => {

    });
  }
}

commentsBlockComponent.$inject = ['videoService'];

export default angular.module('partymakerApp.comments-block', [])
  .component('commentsBlock', {
    template: require('./comments-block.component.html'),
    bindings: { comments: '<' },
    controller: commentsBlockComponent
  })
  .name;
