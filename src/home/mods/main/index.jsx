'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';
import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleClick = this.handleClick.bind(this);
    this._renderPage = this._renderPage.bind(this);
  }

  handleClick() {
    const { dispatch, counter } = this.props;
    if (this.loading) {
      return false;
    }

    this.setState({
      loading: true
    });
    dispatch(actions.getList(counter + 1, () => {
      this.setState({
        loading: false
      });
    }, (json) => {
      this.setState({
        loading: false
      });
    }));
  }

  _renderPage() {
    const {
      loading
    } = this.state;

    return loading ? 'loading' : 'loading success'
  }

  render() {
    const list = this.props.list;
    return (
      <div className="main-page">
        { this._renderPage() }
        <p>home</p>
      </div>
    );
  }
}


// map state to props
export default connect((state) => {
  return state;
})(App);
