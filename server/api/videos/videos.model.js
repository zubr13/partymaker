'use strict';
/*eslint no-invalid-this:0*/
mongoose.Promise = require('bluebird');
import mongoose, {Schema} from 'mongoose';

var VideosSchema = new Schema({
  name: String,
  author: String,
  youtube: String,
  comments: [{
    author: String,
    date: { type: Date, default: Date.now },
    message: String
  }]
});

export default mongoose.model('Videos', VideosSchema);
