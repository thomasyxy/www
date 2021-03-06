'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { Layout, Header , Sidebar, Section, Footer } from 'fit-layout-global'

import * as actions from '../../actions/home';
import './index.scss';

import Content from '../parts/content';
import Preload from '../components/preload';
import Topbar from '../components/top-bar';
import navData from '../../../config/nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preloading: false,
      waitTime: 2000,
      headerHeight: 45,
      sidebarVisible: false
    };

    this.loadInitData = this.loadInitData.bind(this);
    this._renderPage = this._renderPage.bind(this);
    this.waitPreloadPlay = this.waitPreloadPlay.bind(this);
  }

  componentWillMount() {
    // this.loadInitData();
    this.waitPreloadPlay(this.state.waitTime);
  }

  loadInitData() {
    const {
      getInitList
    } = this.props;
    const {
      waitTime
    } = this.state;
    let startPos = Date.now();
    getInitList({}, () => {
      let endPos = Date.now();
      let during = endPos - startPos;
      let delay = during >= waitTime ? 0 : waitTime - during;
      this.waitPreloadPlay(delay);
    }, () => {});
  }

  waitPreloadPlay(delay) {
    setTimeout(() => {
      this.setState({
        preloading: true
      })
    }, delay)
  }

  _renderPreloading() {
    return (
        <Preload key={1} />
    )
  }

  _renderPage(navData) {
    const {
      headerHeight,
      sidebarVisible
    } = this.state;
    const {
      eassyList
    } = this.props;

    return (
      <Layout className="main-page" key={2}>
        <Header height={headerHeight}>
          <Topbar navData={navData}/>
        </Header>
        {
          // <Sidebar width={200} direction="left">侧边栏</Sidebar>
        }
        <Section>
          <Content
            getData={this.props.getArticleList}
            list={eassyList}
          />
        </Section>
      </Layout>
    )
  }

  render() {
    const {
      preloading
    } = this.state;

    return (
      <ReactCSSTransitionGroup transitionName="preload" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          { preloading && navData ? this._renderPage(navData) : this._renderPreloading() }
      </ReactCSSTransitionGroup>
    );
  }
}


function mapDispatchToActions(dispatch) {
    return bindActionCreators(actions, dispatch);
}


// map state to props
export default connect((state) => {
  return state.home;
}, mapDispatchToActions)(App);
