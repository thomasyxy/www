
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import marked from 'marked';

import { ReactMde, ReactMdeCommands } from 'react-mde';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import {grey400, darkBlack, lightBlack, grey900} from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-drop-up';

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
      resumeList: null,
      mdeValue: {text: "", selection: null},
      html: '',
      drawerVisible: false,
      dialogVisible: false,
      dialogTitle: '',
      dialogContent: '',
      dialogActions: '',
      dialogAllow: false,
      newResumeName: '',
      curId: null,
      curTitle: null,
      preview: false,
      initText: 'Hello World'
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
    this._renderIconMenu = this._renderIconMenu.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
  }

  componentWillMount() {
    const {
      resume
    } = this.props;

    this.loadResume(resume)
  }

  loadResume(resume) {
    const {
      defaultValue
    } = this.state;

    let curResume = resume || defaultValue;

    if(curResume._id !== this.state.curId){
      this.props.showResume(curResume);
    }
    let html = marked(curResume.text)
    this.setState({
      mdeValue: {
        text: curResume.text,
        selection: null
      },
      html: html,
      curId: curResume._id,
      curTitle: curResume.title,
      newResumeName: curResume.title
    })
  }

  saveResume() {
    const {
      curId,
      mdeValue,
      handleShowMessage
    } = this.state;
    fetch('/resume/save', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: curId,
        text: mdeValue.text
      })
    }).then(function(res) {
      res.json().then((res) => {
        handleShowMessage(res.message);
      })
    }).catch((e) => {
      handleShowMessage(e.message || '请求失败');
    })
  }

  createResume(title, text) {
    const {
      newResumeName,
      mdeValue,
      resumeList,
      handleShowMessage
    } =this.state;
    fetch('/resume/create', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title || newResumeName,
        text: text || mdeValue.text
      })
    }).then((res) => {
      res.json().then((res) => {
        if(res.success && res.data){
          resumeList.push(res.data);
          this.setState({
            resumeList: resumeList,
            curId: res.data._id
          })
          handleShowMessage(res.message);
        }else{
          handleShowMessage(res.message || '接口异常');
        }
      })
    }).catch((e) => {
      handleShowMessage(e.message || '请求失败');
    })
  }

  getResumeList() {
    const {
      handleShowMessage
    } = this.state;
    fetch('/resume/list', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      res.json().then((res) => {
        if(res.success && res.data){
          this.setState({
            resumeList: res.data
          })
        }else{
          handleShowMessage(res.message || '接口异常');
        }
      })
    }).catch((e) => {
      handleShowMessage(e.message || '请求失败');
    })
  }

  setMainResume(id) {
    const {
      handleShowMessage
    } = this.state;
    fetch(`/resume/setMain?_id=${id}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      res.json().then((res) => {
        if(res.success){
          handleShowMessage(res.message);
        }else{
          handleShowMessage(res.message || '接口异常');
        }
      })
    }).catch((e) => {
      handleShowMessage(e.message || '请求失败');
    })
  }

  deleteResume(id, key) {
    const {
      handleShowMessage,
      resumeList
    } = this.state;
    fetch(`/resume/delete?_id=${id}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      res.json().then((res) => {
        if(res.success){
          resumeList.splice(key, 1);
          this.setState({
            resumeList: resumeList
          })
          this.loadResume(resumeList[0]);
          handleShowMessage(res.message);
        }else{
          handleShowMessage(res.message || '接口异常');
        }
      })
    }).catch((e) => {
      handleShowMessage(e.message || '请求失败');
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
    const {
      newResumeName,
      initText
    } = this.state;
    this.setState({
      mdeValue: {
        text: initText,
        selection: null
      }
    })
    this.createResume(newResumeName, initText);
  }

  handleToggleVisible() {
    if(!this.state.resumeList){
      this.getResumeList();
    }
    this.setState({
      drawerVisible: !this.state.drawerVisible
    })
  }

  handleDialogClose() {
    this.setState({
      dialogVisible: false,
      dialogTitle: '',
      dialogContent: '',
      dialogActions: ''
    })
  }

  handleDialogOpen(title, content, actions) {
    this.setState({
      dialogVisible: true,
      dialogTitle: title,
      dialogContent: content,
      dialogActions: actions
    })
  }

  handleDialogConfirm() {
    this.setNewResume()
    this.setState({
      dialogVisible: false
    })
  }

  togglePreview() {
    this.setState({
      preview: !this.state.preview
    })
  }

  _renderIconMenu(id, key) {
    return <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem primaryText="打开" onClick={() => { window.open(`/resume?_id=${id}`) }} />
      <MenuItem primaryText="设为主简历" onClick={() => { this.setMainResume(id) }} />
      <MenuItem primaryText="删除" onClick={() => { this.deleteResume(id, key) }} />
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
      <Button
        raised
        label="取消"
        onTouchTap={this.handleDialogClose}
      />,
      <Button
      raised
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
      contentStyle={{maxWidth: 400, minHeight: 180}}
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
      curId,
      curTitle,
      preview,
      newResumeName
    } = this.state;

    const content = <TextField
        floatingLabelText="请设置简历名称"
        onChange={this.checkResumeName}
      />

    return (
      <div className="edit-page">
        <div className="edit-header">
          <div className="edit-info">
            <h1 className="info-title">{newResumeName || curTitle}</h1>
          </div>
        </div>
        <div className="edit-content">
          {
            preview ? <div className="edit-slidebar" key={0}>
              <Paper className="edit-view markdown-body" style={{padding: 20}} zDepth={2} dangerouslySetInnerHTML={{__html: html}}>
              </Paper>
            </div> : <div key={1}></div>
          }
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
        <div className="edit-option">
          <Button raised label="简历箱" primary={true} onTouchTap={this.handleToggleVisible} />
          <Button raised label="保存" onClick={ curId ? this.saveResume : this.createResume } />
        </div>
        <Drawer
          className="edit-drawer"
          docked={false}
          open={drawerVisible}
          containerStyle={{position: 'absolute', overflow: 'hidden'}}
          onRequestChange={this.handleToggleVisible}>
          <List className="edit-resume-list" style={{paddingRight: 12}}>
            {
              resumeList && resumeList.length > 0 ? resumeList.map((val, key) =>
                <ListItem
                  className="edit-resume-item"
                  key={key}
                  primaryText={<p className="edit-resume-title">{val.title}</p>}
                  leftIcon={<AccountBox color={ curId === val._id ? grey900 : grey400 }/>}
                  rightIconButton={this._renderIconMenu(val._id, key)}
                  onClick={() => { this.loadResume(val) }}
                />
            ) : <ListItem
                className="edit-resume-blank"
                primaryText="暂无简历，立即添加"
                rightIcon={<AddCircle color={grey900} />}
                innerDivStyle={{textAlign: 'center'}}
                onClick={() => { this.handleDialogOpen(null, content) }}
              />
            }
          </List>
          <Button fab className="edit-resume-add" onClick={() => { this.handleDialogOpen(null, content) }}>
            <ContentAdd />
          </Button>
          <div className="drawer-toggle" onClick={this.handleToggleVisible}>
            <ArrowUp className="toggle-icon"/>
          </div>
        </Drawer>
        { this._renderDialog() }
        <div className="option-preview">
          <Checkbox
            checkedIcon={<Visibility />}
            uncheckedIcon={<VisibilityOff />}
            checked={preview}
            onClick={this.togglePreview}
          />
        </div>
      </div>
    );
  }
}

export default ResumeEdit;
