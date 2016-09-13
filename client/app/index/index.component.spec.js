'use strict';

describe('Component: IndexComponent', function() {
  // load the controller's module
  beforeEach(module('partymakerApp.index'));

  var IndexComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    IndexComponent = $componentController('index', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
