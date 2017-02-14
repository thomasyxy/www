
import React, { PropTypes } from 'react';
import assign from 'object-assign';

import 'whatwg-fetch'

class ResumeView extends React.Component {
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
      <div>123</div>
    );
  }
}

export default ResumeView;
