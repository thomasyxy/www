
import React, { PropTypes } from 'react';
import assign from 'object-assign';

import Paper from 'material-ui/Paper';


class LoginPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {

    });
  }
  componentWillMount() {
  }
  render() {
    const {
    } = this.state;
    const style = {
      height: 500,
      width: 800,
    };

    return (
      <div className="login-container">
          <div>
            <Paper className="login" style={style} zDepth={2} rounded={false} />
          </div>
      </div>
    );
  }
}

export default LoginPage;
