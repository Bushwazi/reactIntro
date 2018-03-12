import React, {Component} from 'react';
import PropTypes from 'prop-types';


class MessagesSection extends Component {
  render(){
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <div className="panel-heading">
            <strong>Messages</strong>
          </div>
        </div>
        <div className='panel-body channels'>
          {/*<ChannelList {...this.props} />
          <ChannelForm {...this.props} />*/}
        </div>
      </div>
      
    )
  }
}

MessagesSection.propTypes = {
  // channels: PropTypes.array.isRequired,
  // setChannel: PropTypes.func.isRequired,
  // addChannel: PropTypes.func.isRequired,
  // activeChannel: PropTypes.object.isRequired
}

export default MessagesSection