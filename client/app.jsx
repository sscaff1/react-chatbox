import React from 'react';
import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import InputBox from '/client/components/input-box.jsx';
import {ChatMessages} from '/lib/collections.js';

const composer = (props, onData) => {
  const handle = Meteor.subscribe('chatMessages');
  if (handle.ready()) {
    const messages = ChatMessages.find({}).fetch();
    onData(null, {messages});
  }
}

const App = ({messages}) => (
  <div>
    <InputBox messages={messages} />
  </div>
);

export default composeWithTracker(composer)(App);
