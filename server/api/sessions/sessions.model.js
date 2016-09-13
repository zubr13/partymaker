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
  url: String,
  videos: [{
    url: String,
    score: { type: Number, min: 1, max: 5 },
    messages: [{
      date: { type: Date, default: Date.now },
      author: String,
      message: String
    }]
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

SessionsSchema
  .path('url')
  .validate(function(value, respond) {
    return this.constructor.findOne({ url: value }).exec()
      .then(session => {
        if(session) {
          if(this.id === session.id) {
            return respond(true);
          }
          return respond(false);
        }
        return respond(true);
      })
      .catch(function(err) {
        throw err;
      });
  }, 'This url already exist!');


export default mongoose.model('Sessions', SessionsSchema);
