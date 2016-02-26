import {Meteor} from 'meteor/meteor';
import {ChatMessages} from '/lib/collections.js';

Meteor.publish('chatMessages', () => {
  return ChatMessages.find();
});
