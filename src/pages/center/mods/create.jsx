
import React, { PropTypes } from 'react';
import assign from 'object-assign';

import { ReactMde, ReactMdeCommands } from 'react-mde';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';

import 'whatwg-fetch'

class Create extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      mdeValue: {
        text: '',
        selection: null
      },
      title: '',
      cover: '',
      snackbarVisible: false,
      snackbarMessage: ''
    });

    this.refreshCode = this.refreshCode.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setCover = this.setCover.bind(this);
    this.createArticle = this.createArticle.bind(this);
    this.handleShowMessage = this.handleShowMessage.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);

  }

  componentWillMount() {
  }

  createArticle() {
    const {
      title,
      mdeValue,
      cover
    } = this.state;
    fetch('/blog/create', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        text: mdeValue.text,
        cover: cover
      })
    }).then((res) => {
      res.json().then((res) => {
        if(res.success && res.data){
          this.handleShowMessage(res.message);
        }else{
          this.handleShowMessage(res.message || '接口异常');
        }
      })
    }).catch((e) => {
      this.handleShowMessage(e.message || '请求失败');
    })
  }

  refreshCode(newCode) {
    this.setState({
      mdeValue: newCode
    });
  }

  setTitle(e, newVal) {
    this.setState({
      title: newVal
    })
  }

  setCover(e, newVal) {
    this.setState({
      cover: newVal
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
      mdeValue,
      handleRequestClose,
      snackbarVisible,
      snackbarMessage
    } = this.state;

    return (
      <div className="create">
        <TextField
          floatingLabelText="请输入文章标题"
          onChange={this.setTitle}
        />
        <TextField
          floatingLabelText="请输入文章封面链接"
          onChange={this.setCover}
        />
        <Button label="保存" onClick={this.createArticle} />
        <ReactMde
          textareaId="ta1"
          textareaName="ta1"
          value={mdeValue}
          onChange={this.refreshCode.bind(this)}
          commands={ReactMdeCommands.getDefaultCommands()} />
        <Snackbar
          className="register-message"
          open={snackbarVisible}
          message={snackbarMessage}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default Create;
