'use strict';

describe('Component: CommonWatchComponent', function() {
  // load the controller's module
  beforeEach(module('partymakerApp.common-watch'));

  var CommonWatchComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CommonWatchComponent = $componentController('common-watch', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
