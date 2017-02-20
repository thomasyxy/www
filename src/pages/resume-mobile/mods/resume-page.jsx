
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
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

class ResumePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      pageName: 'view',
      resume: null,
      serverResult: true
    });
    this.showResume = this.showResume.bind(this);
  }

  componentWillMount() {
    this.getMainResume();
  }


  getMainResume() {
    fetch('/resume/query?main=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      res.json().then((res) => {
        if(res.success){
          if(res.data && res.data.length > 0){
            this.showResume(res.data[0])
          }
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
      resume: resume
    })
  }

  render() {
    const {
      pageName,
      resume,
      serverResult
    } = this.state;

    const TabConfig = [
      {
        title: '简历主页',
        view: <ResumeView resume={resume} />
      },
      {
        title: '简历编辑',
        view: <ResumeEdit resume={resume} showResume={this.showResume} />
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
    </div>
  }
}

export default ResumePage;
