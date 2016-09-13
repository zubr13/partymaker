'use strict';

describe('Component: chat', function() {
  // load the component's module
  beforeEach(module('partymakerApp.chat'));

  var chatComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    chatComponent = $componentController('chat', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
