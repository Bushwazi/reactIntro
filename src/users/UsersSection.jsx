import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UsersSection extends Component{
  render(){
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <div className="panel-heading">
            <strong>Users</strong>
          </div>
        </div>
        <div className='panel-body channels'>
        </div>
      </div>
      
    )
  }
}

UsersSection.propTypes = {
  // channels: PropTypes.array.isRequired,
  // setChannel: PropTypes.func.isRequired,
  // addChannel: PropTypes.func.isRequired,
  // activeChannel: PropTypes.object.isRequired
}

export default UsersSection