
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import 'whatwg-fetch'

import ResumeView from './resume-view';
import ResumeEdit from './resume-edit';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class LoginPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      pageName: 'view',
      slideIndex: 0,
      resume: null
    });
    this.handleChange = this.handleChange.bind(this);
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
        if(res.data && res.data.length > 0){
          this.setState({
            resume: res.data[0]
          })
        }
      })
    })
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    const {
      pageName,
      resume
    } = this.state;

    const TabConfig = [
      {
        title: '简历预览',
        view: function() {
          return <ResumeView resume={resume} />
        }
      },
      {
        title: '简历编辑',
        view: function() {
          return <ResumeEdit resume={resume} />
        }
      }
    ];

    return <div className="resume-page">
      <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
        {
          TabConfig.map((val, key) =>
            <Tab label={val.title} value={key} key={key}/>
          )
        }
      </Tabs>
      <SwipeableViews className="resume-slider" index={this.state.slideIndex} onChangeIndex={this.handleChange}>
        {
          resume && TabConfig && TabConfig.length > 0 ? TabConfig.map((val, key) =>
            <div className="resume-part" style={styles.slide} key={key}>{val.view()}</div>
          ) : ''
        }
      </SwipeableViews>
    </div>
  }
}

export default LoginPage;
