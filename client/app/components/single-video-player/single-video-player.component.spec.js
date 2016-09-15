'use strict';

describe('Component: singleVideoPlayer', function() {
  // load the component's module
  beforeEach(module('partymakerApp.single-video-player'));

  var singleVideoPlayerComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    singleVideoPlayerComponent = $componentController('singleVideoPlayer', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
