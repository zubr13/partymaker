'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './index.routes';
import videoList from './../components/video-list/video-list.component';
import commonWatch from './../common-watch/common-watch.component';
import video from './../video/video.component';

export class IndexComponent {
  /*@ngInject*/
  constructor($scope) {
    this.$scope = $scope;
    this.searchQuery = '';
    this.videos = [];
  }

  searchVideo() {
    gapi.client.load('youtube', 'v3', () => {
      const request = gapi.client.youtube.search.list({
        q: this.searchQuery,
        maxResults: 9,
        part: 'snippet'
      });

      request.execute(response => {
        const items = response.result.items;
        for(let i = 0; i < items.length; i++){
          this.videos[i] = {
            youtube: `http://www.youtube.com/embed/${items[i].id.videoId}`,
            author: items[i].snippet.channelTitle,
            name: items[i].snippet.title
          }
        }
        this.$scope.$broadcast('videoSearch', this.videos);
      }); 
    });
  }
}

IndexComponent.$inject = ['$scope'];

export default angular.module('partymakerApp.index', [uiRouter, videoList, commonWatch, video])
  .config(routes)
  .component('index', {
    template: require('./index.html'),
    controller: IndexComponent,
    controllerAs: 'indexCtrl'
  })
  .name;
