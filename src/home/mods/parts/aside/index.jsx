import React from 'react';

import Topbar from '../../components/top-bar';

require('./index.scss');




export default class Aside extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAsideNav(navData){
    return (
      <div className="aside-nav">
        <Topbar navData={navData}/>
      </div>
    )
  }

  render() {
    let {
      navData
    } = this.props;

    return (
      <div className="aside-container">
        { aside ? this.renderAsideNav(navData) : '' }
      </div>
    );
  }
}
