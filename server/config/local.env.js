'use strict';

// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:8888',
  SESSION_SECRET: 'partymaker-secret',

  FACEBOOK_ID: '157524328028332',
  FACEBOOK_SECRET: 'cf07257811e67a01731a3a8855ba4b29',

  TWITTER_ID: 'WNxuLEX0slVpHBRhtiDFd2yMD',
  TWITTER_SECRET: '2BPgIj0gBcf52Lzkkpz4GSa12yjZxL0rZ1CZOgfQV9DCivmlDp',

  GOOGLE_ID: '958291601200-5cocapig4a24jd15obj07tt7oet6e509.apps.googleusercontent.com',
  GOOGLE_SECRET: 'BMy4gy-gT5SgzrUuhxw9hSd-',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
