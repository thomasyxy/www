
import React, { PropTypes } from 'react';
import assign from 'object-assign';

class Door extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {});
  }

  render() {

    return <div className="door-page">
      welcome to bookstore
    </div>
  }
}

export default Door;
