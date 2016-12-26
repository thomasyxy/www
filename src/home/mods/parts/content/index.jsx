import React from 'react';

// import Topbar from '../../components/top-bar';

require('./index.scss');




export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      loadContentData,
      curPage
    } = this.props;

    loadContentData(curPage)
  }

  renderTopbar(navData){
    return (
      <div className="content">

      </div>
    )
  }

  render() {
    const {
      navData,

    } = this.props;

    return (
      <div className="content-container">
        { navData ? this.renderTopbar(navData) : '' }
      </div>
    );
  }
}
