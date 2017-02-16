
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import marked from 'marked';

import { ReactMde, ReactMdeCommands } from 'react-mde';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AccountBox from 'material-ui/svg-icons/Action/account-box';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, darkBlack, lightBlack, grey900} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import 'whatwg-fetch'

const iconButtonElement = (
  <IconButton
    touch={true}
  >
    <MoreVertIcon color={grey400}/>
  </IconButton>
);

class ResumeEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      resumeList: [],
      mdeValue: {text: "", selection: null},
      html: '',
      drawerVisible: false,
      dialogVisible: false,
      dialogTitle: '',
      dialogContent: '',
      dialogActions: '',
      dialogAllow: false,
      newResumeName: '',
      curId: null
    });
    this.saveResume = this.saveResume.bind(this);
    this.refreshCode = this.refreshCode.bind(this);
    this.handleToggleVisible = this.handleToggleVisible.bind(this);
    this.getResumeList = this.getResumeList.bind(this);
    this.createResume = this.createResume.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.checkResumeName = this.checkResumeName.bind(this);
    this.setNewResume = this.setNewResume.bind(this);
    this.handleDialogConfirm = this.handleDialogConfirm.bind(this);
    this.setMainResume = this.setMainResume.bind(this);
    this._renderIconMenu = this._renderIconMenu.bind(this);
  }

  componentWillMount() {
    const {
      resume
    } = this.props;

    this.loadResume(resume)
  }

  loadResume(resume) {
    if(resume){
      if(resume._id !== this.state.curId){
        this.props.showResume(resume);
      }
      let html = marked(resume.text)
      this.setState({
        mdeValue: {
          text: resume.text,
          selection: null
        },
        html: html,
        curId: resume._id
      })
    }
  }

  saveResume() {
    fetch('/resume/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.curId,
        text: this.state.mdeValue.text
      })
    })
  }

  createResume() {
    fetch('/resume/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'yinxueyuan',
        title: newResumeName,
        text: this.state.mdeValue.text
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

  setMainResume(id) {
    fetch(`/resume/main?_id=${id}&username=yinxueyuan`, {
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

  checkResumeName(e, newVal) {
    if(newVal){
      this.setState({
        dialogAllow: true,
        newResumeName: newVal
      })
    }else{
      this.setState({
        dialogAllow: false
      })
    }
  }

  setNewResume() {
    this.setState({
      mdeValue: {text: "", selection: null},
      html: '',
      curId: null
    })
  }

  handleToggleVisible() {
    if(this.state.resumeList.length === 0){
      this.getResumeList();
    }
    this.setState({
      drawerVisible: !this.state.drawerVisible
    })
  }

  handleDialogClose(cb) {
    this.setState({
      dialogVisible: false,
      dialogTitle: '',
      dialogContent: '',
      dialogActions: ''
    })
    cb && cb()
  }

  handleDialogOpen(title, content, actions, cb) {
    this.setState({
      dialogVisible: true,
      dialogTitle: title,
      dialogContent: content,
      dialogActions: actions
    })
    cb && cb()
  }

  handleDialogConfirm() {
    this.setNewResume()
    this.setState({
      dialogVisible: false
    })
  }

  _renderIconMenu(id) {
    return <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem primaryText="设为主简历" onClick={() => { this.setMainResume(id) }} />
      <MenuItem primaryText="下载" />
      <MenuItem primaryText="删除" />
    </IconMenu>
  }

  _renderDialog() {
    const {
      dialogVisible,
      dialogTitle,
      dialogContent,
      dialogActions,
      dialogAllow
    } = this.state;

    const actions = [
      <RaisedButton
        label="取消"
        onTouchTap={this.handleDialogClose}
      />,
      <RaisedButton
        label="确定"
        primary={dialogAllow}
        disabled={!dialogAllow}
        onTouchTap={this.handleDialogConfirm}
      />
    ];

    return <Dialog
      title={dialogTitle}
      actions={dialogActions || actions}
      modal={false}
      open={dialogVisible}
      contentStyle={{maxWidth: 400}}
      onRequestClose={this.handleDialogClose}
    >
      {dialogContent}
    </Dialog>
  }

  render() {
    const {
      resumeList,
      mdeValue,
      html,
      drawerVisible,
      hasResumeName,
      curId
    } = this.state;

    const content = <TextField
        floatingLabelText="请设置简历名称"
        onChange={this.checkResumeName}
      />

    return (
      <div className="edit-page">
        <div className="edit-option">
          <RaisedButton label="保存" onClick={ curId ? this.saveResume : this.createResume } />
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
          open={drawerVisible}
          containerStyle={{position: 'absolute'}}
          onRequestChange={this.getResumeList}>
          <List className="edit-resume-list">
            {
              resumeList.length > 0 ? resumeList.map((val, key) =>
                <ListItem
                  className="edit-resume-item"
                  key={key}
                  primaryText={<p className="edit-resume-title">{val.title}</p>}
                  leftIcon={<AccountBox color={ curId === val._id ? grey900 : grey400 }/>}
                  rightIconButton={this._renderIconMenu(val._id)}
                  onClick={() => { this.loadResume(val) }}
                />
            ) : <ListItem className="edit-resume-blank" primaryText="暂无简历，立即添加" />
            }
            <FloatingActionButton className="edit-resume-add" onClick={() => { this.handleDialogOpen(null, content) }}>
              <ContentAdd />
            </FloatingActionButton>
          </List>
        </Drawer>
        { this._renderDialog() }
      </div>
    );
  }
}

export default ResumeEdit;
