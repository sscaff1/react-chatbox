import React from 'react';
import {ChatBox} from './chat-box.jsx';
import moment from 'moment';

class InputBox extends React.Component {
  componentDidMount() {
    this.scrollBottom(500);
  }

  scrollBottom(time) {
    //scroll to the bottom of the chatbox
    $('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight}, time);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.refs.username.value;
    const newMessage = this.refs.chatValue.value;
    Meteor.call('insertMessage', {
      key: new Date().getTime(),
      user: user || 'Unknown User',
      time: moment().format('hh:mm A'),
      message: newMessage,
      image: null
    });
    //reset the chat value
    this.refs.chatValue.value = '';
    this.scrollBottom(50);
  }

  handleFile(event) {
    event.preventDefault();
    let reader = new FileReader();
    const file = event.target.files[0];
    const user = this.refs.username.value;
    reader.onloadend = () => {
      Meteor.call('insertMessage', {
        key: new Date().getTime(),
        user: user || 'Unknown User',
        time: moment().format('hh:mm A'),
        message: null,
        image: reader.result
      });
    }
    reader.readAsDataURL(file);
    $('#file-input').val('');
    this.scrollBottom(50);
  }

  render() {
    return (
      <div>
        <ChatBox messages={this.props.messages} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-btn">
                <input className="btn btn-primary" type="file" id="file-input" onChange={this.handleFile.bind(this)} />
              </span>
              <input className="form-control" type="text" placeholder="Type your message" ref="chatValue" />
            </div>
          </div>
        </form>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Enter your Name" ref="username" />
        </div>
      </div>
    )
  }
}

export default InputBox;
