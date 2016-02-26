import {ChatMessages} from '/lib/collections.js';

SyncedCron.add({
  name: 'Clear the chatroom',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 1 hour');
  },
  job: function() {
    ChatMessages.remove({});
  }
});

//SyncedCron.start();
