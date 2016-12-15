import React from 'react';

import { Navbar } from 'react-bootstrap';

require('./index.scss');




export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNavbar(list){
    return (
      <div>
        header
      </div>
    )
  }

  render() {
    let {
      navData
    } = this.props;

    return (
      <div className="top-container">
        { navData ? this.renderNavbar(navData) : '' }
      </div>
    );
  }
}
