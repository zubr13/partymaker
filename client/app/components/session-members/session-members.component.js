'use strict';
const angular = require('angular');
import profileService from './../../profile/profile.service';

export class sessionMembersComponent {
  /*@ngInject*/
  constructor($scope, videoService, Auth, $stateParams) {
    this.members = [];
    this.friends = [];
    this.creator = "";
    this.$stateParams = $stateParams;
    this.videoService = videoService;
    this.Auth = Auth;
    $scope.$on('videoLoaded', (event, video) => {
      this.members = video.members;
      this.creator = video.creator;
    });
    this.getUser();
  }

  getUser() {
    this.Auth.getCurrentUser().then(data => {
      this.friends = data.friends;
      this.choosedMember = this.friends[0];
    });
  }

  addMember() {
    this.videoService.addSessionMember(this.$stateParams.id, this.choosedMember);
    this.videoService.sendInvite(this.choosedMember, this.creator, this.$stateParams.id);
    this.members.push(this.choosedMember);
  }
}

sessionMembersComponent.$inject = ['$scope', 'videoService', 'Auth', '$stateParams'];

export default angular.module('partymakerApp.session-members', [])
  .component('sessionMembers', {
    template: require('./session-members.component.html'),
    bindings: { message: '<' },
    controller: sessionMembersComponent
  })
  .name;
