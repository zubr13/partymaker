'use strict';

describe('Component: videoPlayer', function() {
  // load the component's module
  beforeEach(module('partymakerApp.video-player'));

  var videoPlayerComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    videoPlayerComponent = $componentController('videoPlayer', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
