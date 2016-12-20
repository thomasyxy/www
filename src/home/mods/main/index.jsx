'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import * as actions from '../../actions/index';
import { ajax } from '../../../utils';
import './index.scss';

import Header from '../parts/header';
import Preload from '../components/preload';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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

  waitPreloadPlay(delay) {
    setTimeout(() => {
      this.setState({
        Preloading: true
      })
    }, delay)
  }

  _renderPage() {
    const {
      Preloading,
      initData
    } = this.state;

    return (
      <div>
        <ReactCSSTransitionGroup transitionName="preload" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        {
          Preloading && initData ? <Header navData={initData.navData} key={1} /> : this.renderPreloading()
        }
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  renderPreloading() {
    return (
        <Preload key={2} />
    )
  }

  render() {
    const list = this.props.list;
    return (
      <div className="main-page">
        { this._renderPage() }
      </div>
    );
  }
}


// map state to props
export default connect((state) => {
  return state;
})(App);
