'use strict';

describe('Component: CreateVideoComponent', function() {
  // load the controller's module
  beforeEach(module('partymakerApp.create-video'));

  var CreateVideoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CreateVideoComponent = $componentController('create-video', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
