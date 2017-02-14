
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import marked from 'marked';

import { ReactMde, ReactMdeCommands } from 'react-mde';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import 'whatwg-fetch'

class ResumeEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      resumeList: [],
      mdeValue: {text: "", selection: null},
      html: '',
      visible: false
    });
    this.saveResume = this.saveResume.bind(this);
    this.refreshCode = this.refreshCode.bind(this);
    this.handleToggleVisible = this.handleToggleVisible.bind(this);
    this.getResumeList = this.getResumeList.bind(this);
  }

  componentWillMount() {
    this.loadResume()
  }

  loadResume() {
    const {
      resume
    } = this.props;

    if(resume){
      let html = marked(resume.text)
      this.setState({
        mdeValue: {
          text: resume.text,
          selection: null
        },
        html: html
      })
    }
  }

  saveResume(text) {
    fetch('/resume/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'yinxueyuan',
        code: text
      })
    })
  }

  getResumeList() {
    fetch('/resume/list?username=yinxueyuan', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      res.json().then((res) => {
        this.setState({
          resumeList: res.data
        })
      })
    })
  }

  refreshCode(newCode) {
		let html = marked(newCode.text);
    this.setState({
      mdeValue: newCode,
      html: html
    });
  }

  handleToggleVisible() {
    if(this.state.resumeList.length === 0){
      this.getResumeList();
    }
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const {
      resumeList,
      mdeValue,
      html,
      visible
    } = this.state;

    return (
      <div className="edit-page">
        <div className="edit-option">
          <RaisedButton label="保存" onClick={() => { this.saveResume(mdeValue.text) }} />
          <RaisedButton label="简历箱" primary={true} onTouchTap={this.handleToggleVisible} />
          <RaisedButton label="Secondary" secondary={true} />
        </div>
        <div className="edit-content">
          <div className="edit-slidebar">
            <Paper className="edit-view markdown-body" style={{padding: 20}} zDepth={3} dangerouslySetInnerHTML={{__html: html}}>
            </Paper>
          </div>
          <div className="edit-section">
    				<div className="editor">
                <ReactMde
                  textareaId="ta1"
                  textareaName="ta1"
                  value={mdeValue}
                  onChange={this.refreshCode.bind(this)}
                  commands={ReactMdeCommands.getDefaultCommands()} />
    				</div>
          </div>
        </div>
        <Drawer
          className="edit-drawer"
          open={visible}
          containerStyle={{position: 'absolute'}}
          onRequestChange={this.getResumeList}>
          {
            resumeList.length > 0 ? resumeList.map((val, key) =>
              <MenuItem key={key}>{val.title}</MenuItem>
            ) : <MenuItem>暂无简历，立即添加</MenuItem>
          }
        </Drawer>
      </div>
    );
  }
}

export default ResumeEdit;
