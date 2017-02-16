
import React, { PropTypes } from 'react';
import assign from 'object-assign';

class ResumeError extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {

    });
  }

  componentWillMount() {
    // this.getInitData();
  }

  render() {
    return (
      <div className="error-page">
        <img src="https://img.alicdn.com/tps/TB1EIFePFXXXXXfXpXXXXXXXXXX-320-232.png" />
        <p>服务器好像开小差了，刷新一下吧~~</p>
      </div>
    );
  }
}

export default ResumeError;
