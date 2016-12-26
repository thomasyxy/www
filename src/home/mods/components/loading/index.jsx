import React from 'react';
import Loading from 'fit-loading'

require('./index.scss');




export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPlay(){
    return (
      <Loading className="wrap-preload circle-ball" />
  }

  render() {
    return (
      <div className="loading-container">
        { this.renderPlay() }
      </div>
    );
  }
}
