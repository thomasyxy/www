
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import {Tabs, Tab} from 'material-ui/Tabs';
import Snackbar from 'material-ui/Snackbar';
import 'whatwg-fetch'

import ResumeView from './resume-view';
import ResumeEdit from './resume-edit';
import ResumeError from './resume-error';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10
  },
};

const INTRO = `### MD简历箱项目

* 支持[markdown语法](http://younghz.github.io/Markdown)

* 管理简历

* 快速在线编辑

###### 支持操作：
创建简历、保存简历、删除简历、设置主简历（显示在简历主页，优先级较高）、直接创建链接，在线编辑、显示/隐藏预览界面。

###### 涉及技术：

1.前端使用 \`react\` + \`webpack\` 快速构建项目

2.使用的组件库为 [Material-UI](http://www.material-ui.com/#/)

3.后端用 Node.js + Koa 框架 + jade 模板引擎

4.使用 MongoDB 作为数据库

**项目地址: [github](https://github.com/thomasyxy/www)**
`

class ResumePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      pageName: 'view',
      resume: null,
      serverResult: true,
      snackbarVisible: false,
      snackbarMessage: '',
      defaultValue: {text: INTRO, selection: null}
    });
    this.showResume = this.showResume.bind(this);
    this.handleShowMessage = this.handleShowMessage.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillMount() {
    this.getMainResume();
  }


  getMainResume() {
    fetch('/resume/getMain', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      res.json().then((res) => {
        if(res.success && res.data){
          this.showResume(res.data[0])
        }else{
          this.setState({
            serverResult: false
          })
        }
      })
    })
  }

  showResume(resume) {
    this.setState({
      resume: resume || this.state.defaultValue
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
      pageName,
      resume,
      serverResult,
      snackbarVisible,
      snackbarMessage,
      defaultValue
    } = this.state;

    const TabConfig = [
      {
        title: '简历主页',
        view: <ResumeView resume={resume} />
      },
      {
        title: '简历编辑',
        view: <ResumeEdit
          resume={resume}
          showResume={this.showResume}
          handleShowMessage={this.handleShowMessage}
          defaultValue={defaultValue}
        />
      }
    ];

    return <div className="resume-page">
      <Tabs onChange={this.handleChange} value={this.state.slideIndex} contentContainerStyle={{height: '92vh'}}>
        {
          TabConfig.map((val, key) =>
            <Tab label={val.title} value={key} key={key}>
              {
                serverResult ?
                    <div className="resume-part">
                      {resume ? val.view : ''}
                    </div> : <ResumeError />
              }
            </Tab>
          )
        }
      </Tabs>
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

export default ResumePage;
