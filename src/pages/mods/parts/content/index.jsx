import React from 'react';
import Loading from 'fit-loading'

// import Topbar from '../../components/top-bar';

require('./index.scss');

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.loadContentData = this.loadContentData.bind(this);
    this.state = {
      curPage: 1,
      easyList: [],
      loading: true
    }
  }

  componentWillMount() {
    const {
      curPage
    } = this.state;

    this.loadContentData(curPage)
  }

  loadContentData(page) {
    const {
      getArticleList
    } = this.props;
    getArticleList({
      page: page
    })
  }

  renderList(list) {
    return (
      <div className="content">
        
      </div>
    )
  }

  render() {
    const {
      easyList
    } = this.state;

    return (
      <div className="content-container">
        { loading ? <Loading/> : this.renderList(easyList) }
      </div>
    );
  }
}
