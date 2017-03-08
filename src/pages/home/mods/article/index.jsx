'use strict';

import React from 'react';
import Paper from 'material-ui/Paper';

import Topbar from '../components/top-bar';
import navData from '../../../config/nav';
import { ajax } from '../../../../utils';

import './index.scss';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  componentWillMount() {
    getArticleData(id)
  }

  getArticleData(id) {
    ajax({
      api: 'GET_ARTICLE',
      method: 'get',
      body: {
        _id: id
      }
    }, (res) => {
      this.setState({
        post: res.data
      })
    }, (res) => {
      console.log(res)
    });
  }

  render() {
    const {
      post
    } = this.state
    return (
      <Layout className="main-page" key={2}>
        <Header height={headerHeight}>
          <Topbar navData={navData}/>
        </Header>
        <Section>
          <Paper
            className="markdown-body"
            style={{padding: 20}}
            zDepth={3}>
            { resume.title ? <h1 className="view-title">{resume.title}</h1> : '' }
            <div className="view-content" dangerouslySetInnerHTML={{__html: html}}></div>
          </Paper>
        </Section>
      </Layout>
    );
  }
}
