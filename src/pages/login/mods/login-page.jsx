
import React, { PropTypes } from 'react';
import assign from 'object-assign';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class LoginPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      expanded: false
    });

    this.handleClickLogin = this.handleClickLogin.bind(this)
    this.handleClickReset = this.handleClickReset.bind(this)
  }
  componentWillMount() {
  }



  handleClickLogin(expanded) {
    this.setState({expanded: expanded});
  };

  handleClickReset() {
    this.setState({expanded: true});
  };


  render() {

    return (
      <Paper className="login-container" zDepth={1}>
        <div className="input-group">
          <div className="input-name">
            <TextField
              className="custom-input"
              hintText=""
              floatingLabelText="UserName"
            />
          </div>
          <div className="input-psd">
            <TextField
              className="custom-input"
              hintText=""
              floatingLabelText="Password"
              type="password"
            />
          </div>
        </div>
        <div className="btn-group">
          <RaisedButton label="Login" primary={true} />
        </div>
      </Paper>
    );
  }
}

export default LoginPage;
