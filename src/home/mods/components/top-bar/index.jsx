import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

require('./index.scss');




export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  renderNavbar(list) {
    return (
      <Navbar className="" default collapseOnSelect>
        <div className="top-menu-btn">aaa</div>
        <Navbar.Header>
          <Navbar.Brand>
            <div className="top-line">
              <a className="top-title" href="./"></a>
              <div className="top-cur-pos">首页</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">博客</NavItem>
              <NavItem eventKey={2} href="#">github</NavItem>
              <NavDropdown eventKey={3} title="实验室" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Header>
        <div className="top-info">33333</div>
      </Navbar>
    )
  }

  render() {
    const {
      navData,
    } = this.props;

    return (
      <div className="top-container">
        { navData ? this.renderNavbar(navData) : '' }
      </div>
    );
  }
}
