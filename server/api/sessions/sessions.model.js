'use strict';
/*eslint no-invalid-this:0*/
mongoose.Promise = require('bluebird');
import mongoose, {Schema} from 'mongoose';

var SessionsSchema = new Schema({
  name: String,
  info: String,
  date: { type: Date, default: Date.now },
  members: [{
    name: String
  }],
  videos: [{
    url: String,
    score: { type: Number, min: 1, max: 5 }
  }],
  chat: [{
    author: String,
    date: { type: Date, default: Date.now },
    message: String
  }]
});

/**
 * Virtuals
 */

// Get info about session without list
SessionsSchema
  .virtual('description')
  .get(function() {
    return {
      name: this.name,
      info: this.info,
      date: this.date,
      members: this.members,
      url: this.url
    };
  });

/**
 *  Validate
 */

// Validate url


export default mongoose.model('Sessions', SessionsSchema);
