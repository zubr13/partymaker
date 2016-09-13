'use strict';

describe('Component: commentsBlock', function() {
  // load the component's module
  beforeEach(module('partymakerApp.comments-block'));

  var commentsBlockComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    commentsBlockComponent = $componentController('commentsBlock', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
