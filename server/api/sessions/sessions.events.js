/**
 * Sessions model events
 */

'use strict';

import {EventEmitter} from 'events';
import Sessions from './sessions.model';
var SessionsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SessionsEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Sessions.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SessionsEvents.emit(event + ':' + doc._id, doc);
    SessionsEvents.emit(event, doc);
  };
}

export default SessionsEvents;
