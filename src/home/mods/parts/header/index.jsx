import React from 'react';

import Topbar from '../../components/top-bar';

require('./index.scss');




export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTopbar(navData){
    return (
      <div>
        <Topbar navData={navData}/>
      </div>
    )
  }

  render() {
    let {
      navData
    } = this.props;

    return (
      <div className="top-container">
        { navData ? this.renderTopbar(navData) : '' }
      </div>
    );
  }
}
