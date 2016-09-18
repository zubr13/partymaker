'use strict';

describe('Component: sessionMembers', function() {
  // load the component's module
  beforeEach(module('partymakerApp.session-members'));

  var sessionMembersComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    sessionMembersComponent = $componentController('sessionMembers', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
