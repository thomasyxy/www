
import React, { PropTypes } from 'react';
import assign from 'object-assign';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import 'whatwg-fetch';

class LoginPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      username: '',
      password: ''
    });

    this.handleClickLogin = this.handleClickLogin.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  componentWillMount() {
  }


  handleClickLogin() {
    const {
      username,
      password,
      successUrl
    } = this.state;

    fetch('/user/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then((res) => {
      res.json().then((res) => {
        if(res.success && res.data._id){
          handleShowMessage(`${res.message}，即将跳转`);
          setTimeout(function() {
            window.location.href = successUrl;
          }, 2000);
        }else{
          handleShowMessage(res.message || '接口异常');
        }
      })
    }).catch((e) => {
      handleShowMessage(e.message);
    })
  };

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  };

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  };


  render() {

    return (
      <Paper className="login-container" zDepth={1}>
        <div className="input-group">
          <div className="input-name">
            <TextField
              className="custom-input"
              hintText=""
              floatingLabelText="用户名"
              onChange={this.handleUsername}
            />
          </div>
          <div className="input-psd">
            <TextField
              className="custom-input"
              hintText=""
              floatingLabelText="Password"
              type="密码"
              onChange={this.handlePassword}
            />
          </div>
        </div>
        <div className="btn-group">
          <RaisedButton label="Login" primary={true} onClick={this.handleClickLogin}/>
        </div>
      </Paper>
    );
  }
}

export default LoginPage;
