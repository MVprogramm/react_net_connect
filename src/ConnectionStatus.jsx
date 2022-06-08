import React from 'react';

import './connectionStatus.scss';

class ConnectionStatus extends React.Component {
  state = {
    status: 'Online'
  }

  componentDidMount() {
    window.addEventListener('online', this.isConnect);
    window.addEventListener('offline', this.notConnect);
  }

  isConnect = () => {
    this.setState({
      status: 'Online'
    })
  }

  notConnect = () => {
    this.setState({
      status: 'Offline'
    })
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.isConnect);
    window.removeEventListener('offline', this.notConnect);
  }

  render() {
    let classStatus = "status";
    if (this.state.status === 'Offline') {
      classStatus = "status status_offline";
    }

    return <div className={classStatus}>{this.state.status}</div>
  };
}

export default ConnectionStatus;