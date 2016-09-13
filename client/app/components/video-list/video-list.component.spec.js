'use strict';

describe('Component: videoList', function() {
  // load the component's module
  beforeEach(module('partymakerApp.video-list'));

  var videoListComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    videoListComponent = $componentController('videoList', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
