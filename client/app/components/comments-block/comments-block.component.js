'use strict';
const angular = require('angular');

export class commentsBlockComponent {
  /*@ngInject*/
  constructor(videoService, $scope) {
    this.comments = [];
    this.comment = '';
    this.videoService = videoService;
    this.$scope = $scope;
  }

  addComment(){
    this.comments.push({message: this.comment, author: this.user.name});
    this.videoService.addComment(this.video,  {message: this.comment, author: this.user.name});
  }
}

commentsBlockComponent.$inject = ['videoService', '$scope'];

export default angular.module('partymakerApp.comments-block', [])
  .component('commentsBlock', {
    template: require('./comments-block.component.html'),
    bindings: { comments: '<', video: '<', user: '<'},
    controller: commentsBlockComponent
  })
  .name;
