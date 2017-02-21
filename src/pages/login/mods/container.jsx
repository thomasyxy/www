
import React, { PropTypes } from 'react';
import assign from 'object-assign';

import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';

import LoginPage from './login-page';
import RegisterPage from './register-page';

class Container extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      curPage: 'login',
      snackbarVisible: false,
      snackbarMessage: '',
      successUrl: '/resume/mobile'
    });

    this.selectPage = this.selectPage.bind(this);
    this.handleShowMessage = this.handleShowMessage.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillMount() {
  }

  selectPage(type) {
    this.setState({
      curPage: type
    })
  }

  handleShowMessage(text) {
    this.setState({
      snackbarVisible: true,
      snackbarMessage: text
    })
  }

  handleRequestClose() {
    this.setState({
      snackbarVisible: false,
      snackbarMessage: ''
    })
  }


  render() {
    const {
      curPage,
      snackbarVisible,
      snackbarMessage,
      successUrl
    } = this.state;

    const optionConfig = [
      {
        name: 'login',
        title: '登录',
        view: <LoginPage handleShowMessage={this.handleShowMessage} successUrl={successUrl} />
      },
      {
        name: 'register',
        title: '注册',
        view: <RegisterPage selectPage={this.selectPage} handleShowMessage={this.handleShowMessage}successUrl={successUrl} />
      }
    ]

    return <div className="page-container">
      <div className="page-option">
        {
          optionConfig.map((val, key) =>
            curPage !== val.name ? <span key={key} onClick={() => { this.selectPage(val.name) }}>{val.title}</span> : ''
          )
        }
      </div>
      {
        optionConfig.map((val, key) =>
          curPage === val.name ? <div className="part-container" key={key}>{val.view}</div> : ''
        )
      }
      <Snackbar
        className="register-message"
        open={this.state.snackbarVisible}
        message={snackbarMessage}
        autoHideDuration={2000}
        onRequestClose={this.handleRequestClose}
      />
    </div>
  }
}

export default Container;
