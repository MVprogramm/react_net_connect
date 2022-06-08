import React from 'react';

import './connectionStatus.scss';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online'
  }

  componentDidMount() {
    window.addEventListener('online', this.isConnect);
    window.addEventListener('offline', this.notConnect);
  }

  isConnect = () => {
    this.setState({
      status: 'online'
    })
  }

  notConnect = () => {
    this.setState({
      status: 'offline'
    })
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.isConnect);
    window.removeEventListener('offline', this.notConnect);
  }

  render() {
    let classStatus = "status";
    if (this.state.status === 'offline') {
      classStatus = "status status_offline";
    }

    return <div className={classStatus}>{this.state.status}</div>
  };
}

export default ConnectionStatus;