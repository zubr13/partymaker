'use strict';

// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:3000',
  SESSION_SECRET: 'partymaker-secret',

  FACEBOOK_ID: 'app-id',
  FACEBOOK_SECRET: 'secret',

  TWITTER_ID: 'app-id',
  TWITTER_SECRET: 'secret',

  GOOGLE_ID: '958291601200-5cocapig4a24jd15obj07tt7oet6e509.apps.googleusercontent.com',
  GOOGLE_SECRET: 'BMy4gy-gT5SgzrUuhxw9hSd-',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
