/**
 * Videos model events
 */

'use strict';

import {EventEmitter} from 'events';
import Videos from './videos.model';
var VideosEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
VideosEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Videos.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    VideosEvents.emit(event + ':' + doc._id, doc);
    VideosEvents.emit(event, doc);
  };
}

export default VideosEvents;
