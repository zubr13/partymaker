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
    this.comments.push({message: this.comment, author: this.user.name || 'Anon'});
    this.videoService.addComment(this.video,  {message: this.comment, author: this.user.name || 'Anon'});
  }

  addSessionComment(){
    this.videoService.addSessionComment(this.session,  {message: this.comment, author: this.user.name || 'Anon'});
  }
}

commentsBlockComponent.$inject = ['videoService', '$scope'];

export default angular.module('partymakerApp.comments-block', [])
  .component('commentsBlock', {
    template: require('./comments-block.component.html'),
    bindings: { comments: '<', video: '<', user: '<', session: '<'},
    controller: commentsBlockComponent
  })
  .name;
