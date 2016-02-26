import {Meteor} from 'meteor/meteor';
import {ChatMessages} from './collections.js';

Meteor.methods({
  insertMessage(message) {
    ChatMessages.insert(message);
  }
});
