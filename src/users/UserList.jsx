import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from './User.jsx';

class UsersList extends Component{
  render(){
    return (
      <ul>
        {
          this.props.users.map( user => {
            return (
              <User
                key={user.id}
                user={user}
              />
            )
          })
        }
      </ul>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsersList