'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';
import { fetch } from '../../../utils/';
import './index.scss';

import Header from '../parts/header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this._renderPage = this._renderPage.bind(this);
  }

  componentWillMount() {
    this.loadInitData();
  }

  loadInitData() {
    fetch({
      api: 'GET_INIT_DATA'
    }, (res) => {
      this.setState({
        initData: res,
        loading: true
      })
    })
  }

  _renderPage() {
    const {
      loading,
      initData
    } = this.state;

    return loading && initData ? <Header navData={initData.navData} /> : this.renderLoading()
  }

  renderLoading() {
    return <div>loading...</div>
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
