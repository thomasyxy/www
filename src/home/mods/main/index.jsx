'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import * as actions from '../../actions/index';
import { ajax } from '../../../utils';
import './index.scss';

import Header from '../parts/header';
import Content from '../parts/content';
import Preload from '../components/preload';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Preloading: true,
      waitTime: 4000
    };
    this._renderPage = this._renderPage.bind(this);
  }

  componentWillMount() {
    this.loadInitData();
  }

  loadInitData() {
    const {
      waitTime
    } = this.state;
    let startPos = Date.now();
    ajax({
      api: 'GET_INIT_DATA'
    }, (res) => {
      this.setState({
        initData: res
      });
      let endPos = Date.now();
      let during = endPos - startPos;
      let delay = during >= waitTime ? 0 : waitTime - during;
      this.waitPreloadPlay(delay);
    })
  }

  loadContentData(page) {
    const {
      getArticleList
    } = this.props;
    getArticleList({
      page: page
    })
  }


  waitPreloadPlay(delay) {
    setTimeout(() => {
      this.setState({
        Preloading: true
      })
    }, delay)
  }

  _renderPage(initData) {
    return (
      <div className="main-page" key={1}>
        {
          initData.navData ? <Header navData={initData.navData} /> : ''
        }
        <Content />
      </div>
    )
  }

  renderPreloading() {
    return (
        <Preload key={1} />
    )
  }

  render() {
    const list = this.props.list;
      const {
        Preloading,
        initData
      } = this.state;
    return (
      <ReactCSSTransitionGroup transitionName="preload" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          { Preloading && initData ? this._renderPage(initData) : this.renderPreloading() }
      </ReactCSSTransitionGroup>
    );
  }
}


// map state to props
export default connect((state) => {
  return state;
})(App);
