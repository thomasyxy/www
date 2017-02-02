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
      loading: true
    }
  }

  componentWillMount() {
    const {
      curPage
    } = this.state;
    this.loadContentData(curPage);
  }

  loadContentData(page) {
    const {
      getData
    } = this.props;
    getData({
      page: page
    }, () => {
      this.setState({
        loading: false
      })
    })
  }

  renderList(list) {
    return (
      <div className="content">
        {
          list && list.length > 0 ? list.map((item, index) =>
            <div key={index}>{item.title}</div>
          ) : ''
        }
      </div>
    )
  }

  render() {
    const {
      loading
    } = this.state;

    const {
      list
    } = this.props;

    return (
      <div className="content-container">
        { loading ? <Loading className="content-loading"/> : this.renderList(list) }
      </div>
    );
  }
}
