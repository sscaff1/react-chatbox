import React from 'react';

export const ChatBox = ({messages}) => (
  <div className="chat-box" id="chat-box">
    {messages.map(message => (
      <p key={message.key} className="message">{`${message.user} (${message.time}): `}
        {message.image ? (<img src={message.image} />) : message.message}</p>
    ))}
  </div>
);
