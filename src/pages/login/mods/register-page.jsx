
import React, { PropTypes } from 'react';
import assign from 'object-assign';

import 'whatwg-fetch';

import Paper from 'material-ui/Paper';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class RegisterPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      stepIndex: 0,
      username: '',
      password: '',
      passwordRepeat: ''
    });

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputUsername = this.handleInputUsername.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
    this.handleCheckPassword = this.handleCheckPassword.bind(this);

  }

  componentWillMount() {
  }

  registerRequest() {
    const {
      username,
      password,
      successUrl,
      handleShowMessage
    } = this.state;

    fetch(`/user/register`, {
      method: 'POST',
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
  }

  handleNext() {
    const {
      stepIndex,
      username,
      handleShowMessage
    } = this.state;
    if(stepIndex === 0){
      fetch(`/user/exist?username=${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        res.json().then((res) => {
          if(res.success && res.data){
            if(res.data.length === 0){
              this.setState({
                stepIndex: stepIndex + 1
              })
            }else{
              handleShowMessage(res.message);
            }
          }else{
            handleShowMessage(res.message || '接口异常');
          }
        })
      }).catch((e) => {
        handleShowMessage(e.message);
      })
    }else{
      this.setState({
        stepIndex: stepIndex + 1
      })
    }
  }

  handleBack() {
    this.setState({
      stepIndex: this.state.stepIndex - 1
    })
  }

  handleInputUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleInputPassword(e) {
    this.setState({
      password: e.target.value,
    });
  };

  handleCheckPassword(e) {
    this.setState({
      passwordRepeat: e.target.value,
    });
  }

  handleSubmit() {
    const {
      username,
      password,
      passwordRepeat
    } = this.state;

    try{
      if(username.length === 0){
        throw new Error('用户名不能为空')
      }
      if(username.length > 10){
        throw new Error('用户名不能超过10个字符')
      }
      if(password.length === 0){
        throw new Error('密码不能为空')
      }
      if(password.length < 6){
        throw new Error('请输入6位以上的密码')
      }
      if(password !== passwordRepeat){
        throw new Error('两次输入的密码不一致，请重新确认')
      }
    }catch(e){
      this.state.handleShowMessage(e.message);
      return false
    }

    this.registerRequest();
  }

  render() {
    const {
      stepIndex,
      username,
      password,
      passwordRepeat
    } = this.state;

    const stepConfig = [
      {
        title: '请输入用户名',
        view: <TextField
            className="custom-input"
            hintText=""
            floatingLabelText="请输入用户名"
            onChange={this.handleInputUsername}
            value={username}
          />,
        ButtonText: '名字选好了~'
      },
      {
        title: '请输入密码',
        view: <TextField
            className="custom-input"
            hintText=""
            floatingLabelText="请输入密码"
            type="password"
            onChange={this.handleInputPassword}
            value={password}
          />,
        ButtonText: '这个密码不错~'

      },
      {
        title: '请再次输入密码',
        view: <TextField
            className="custom-input"
            hintText=""
            floatingLabelText="请再次输入密码"
            type="password"
            onChange={this.handleCheckPassword}
            value={passwordRepeat}
          />,
        ButtonText: '提交注册'
      }
    ]

    return (
      <Paper className="register-container" zDepth={1}>
        <Stepper activeStep={stepIndex} style={{height: 40}}>
          {
            stepConfig.map((val, key) =>
              <Step key={key}>
                <StepLabel>
                  {val.title}
                </StepLabel>
              </Step>
            )
          }
        </Stepper>
        <div className="register-content">
          {stepConfig[stepIndex].view}
        </div>
        <div className="register-action">
          {
            stepIndex !== 0 ? <RaisedButton
              className="register-back"
              label="上一步"
              onTouchTap={this.handleBack}
            /> : ''
          }
          <RaisedButton
            className="register-next"
            label={stepConfig[stepIndex].ButtonText}
            primary={true}
            onTouchTap={stepIndex >= stepConfig.length - 1 ? this.handleSubmit : this.handleNext}
          />
        </div>
      </Paper>
    );
  }
}

export default RegisterPage;
