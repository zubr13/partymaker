'use strict';
const angular = require('angular');

const uiBootstrap = require('angular-ui-bootstrap');
const uiRouter = require('angular-ui-router');
const animate = require('angular-animate');
const sanitize = require('angular-sanitize');



import singleVideoPlayer from './../components/single-video-player/single-video-player.component';
import routes from './common-watch.routes';
import videoList from './../components/video-list/video-list.component';
import commentsBlock from './../components/comments-block/comments-block.component';
import chat from './../components/chat/chat.component';
import videoService from './../video-service/video-service.service';
import socket from './../../components/socket/socket.service';
import sessionMembers from './../components/session-members/session-members.component';

export class CommonWatchComponent {
  /*@ngInject*/
  constructor(videoService, socketService, $stateParams, $scope, Auth) {
    this.$stateParams = $stateParams;
    this.Auth = Auth;
    this.$scope = $scope;
    this.user = {};
    this.comments = [];
    this.scores = [];
    this.videoService = videoService;
    this.rate = 0;
    this.messages = [];
    this.videoName = "";
    this.max = 5;
    this.isReadonly = false;
    this.sessionId = this.$stateParams.id;
    this.getUser();
    this.getSessionById();
    this.isGraded = false;
    this.average = "";
    socketService.syncUpdates();
  }

  getSessionById(){
    this.videoService.getSessionById(this.$stateParams.id).then(data => {
      this.$scope.$broadcast('videoLoaded', data);
      this.scores = data.score;
      this.comments = data.comments;
      console.log(this.comments);
      this.calculateAverage();
      this.messages = data.chat;
      this.videoName = data.video.name;
    });
  }

  getUser(){
    this.Auth.getCurrentUser().then(data => {
      this.user = data;;
    });  
  }

  addGrade(){
    this.scores.push(this.rate);
    this.isGraded = true;
    this.calculateAverage();
    this.videoService.addGrade(this.$stateParams.id, this.rate);
  }

  calculateAverage(){
    let sum = 0;
    for(let i = 0; i < this.scores.length; i++){
      sum += this.scores[i];
    }
    this.average = sum / this.scores.length || "";
  }
}

CommonWatchComponent.$inject = ['videoService', 'socketService', '$stateParams', '$scope', 'Auth'];

export default angular.module('partymakerApp.common-watch', [uiBootstrap, uiRouter, animate, sanitize,
 singleVideoPlayer, videoList, commentsBlock, chat, videoService, socket, sessionMembers])
  .config(routes)
  .component('commonWatch', {
    template: require('./common-watch.html'),
    controller: CommonWatchComponent,
    controllerAs: 'commonWatchCtrl'
  })
  .name;
