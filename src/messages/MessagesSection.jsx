import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm.jsx';
import MessageList from './MessageList.jsx';


class MessagesSection extends Component {
  render(){
    console.log("MessagesSection", this.props)
    let {activeChannel} = this.props;
    return (
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'>
          <strong>{activeChannel.name}</strong>
        </div>
        <div className='panel-body messages'>
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
      
    )
  }
}

MessagesSection.propTypes = {
  messages: PropTypes.array.isRequired,
  activeChannel: PropTypes.object.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default MessagesSection