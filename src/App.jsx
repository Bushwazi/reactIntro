import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import MessagesSection from './messages/MessagesSection.jsx';
import UsersSection from './users/UsersSection.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: []
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
    // TODO: Send to server
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    // TODO: Get Channels Messages
  }
  render(){
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection 
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
        </div>
        <div className='nav'>
        	<UsersSection />
        </div>
        <div>
          <MessagesSection />
        </div>
      </div>

      
    )
  }
}

export default App