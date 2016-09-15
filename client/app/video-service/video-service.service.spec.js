'use strict';

describe('Service: videoService', function() {
  // load the service's module
  beforeEach(module('partymakerApp.video-service'));

  // instantiate service
  var videoService;
  beforeEach(inject(function(_videoService_) {
    videoService = _videoService_;
  }));

  it('should do something', function() {
    expect(!!videoService).toBe(true);
  });
});
