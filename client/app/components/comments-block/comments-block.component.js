'use strict';
const angular = require('angular');

export class commentsBlockComponent {
  /*@ngInject*/
  constructor(videoService, $scope) {
    this.comment = '';
    this.videoService = videoService;
    this.$scope = $scope;
  }

  addComment(){
    this.comments.push({message: this.comment, author: "Petya"});
    this.videoService.addComment(this.video,  {message: this.comment, author: "Petya"});
  }
}

commentsBlockComponent.$inject = ['videoService', '$scope'];

export default angular.module('partymakerApp.comments-block', [])
  .component('commentsBlock', {
    template: require('./comments-block.component.html'),
    bindings: { comments: '<', video: '<' },
    controller: commentsBlockComponent
  })
  .name;
