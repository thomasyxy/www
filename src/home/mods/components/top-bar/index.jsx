import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import Utils from '../../../../utils';

require('./index.scss');




export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1'
    };
    this._renderNavbar = this._renderNavbar.bind(this);
    this._renderSubList = this._renderSubList.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  _renderNavbar(navData) {
    return (
      <Navbar default collapseOnSelect>
        <div className="top-menu-btn">aaa</div>
        <Navbar.Header>
          <Navbar.Brand>
            <div className="top-line">
              <a className="top-title" href="./" rel="noopener"></a>
              <div className="top-cur-pos">首页</div>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              {
                navData.list.length !== 0 ? navData.list.map((item, key) =>
                  item.subList ? this._renderDropList(item, key) : (
                    <NavItem key={key} eventKey={key} href={item.url}>
                      {item.title}
                    </NavItem>
                  )
                ) : ''
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar.Header>
        <div className="top-info">33333</div>
      </Navbar>
    )
  }

  _renderDropList(item, key){
    return (
      <NavDropdown key={key} eventKey={key} title={item.title} id="basic-nav-dropdown">
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
        {
          item.subList.length !== 0 ? item.subList.map((subItem, subKey) =>
            <Panel collapsible defaultExpanded key={subKey} header={subItem.title} eventKey={subKey}>
              <ListGroup fill onClick={ () => { this.handleClickItem(subItem.url) }}>
                {
                  subItem.typeList.length !== 0 ? subItem.typeList.map((terItem, terKey) =>
                    <ListGroupItem key={terKey} onClick={ () => { this.handleClickItem(terItem.url) }}>
                      {terItem.title}
                    </ListGroupItem>
                  ) : ''
                }
              </ListGroup>
            </Panel>
          ) : ''
        }
        </PanelGroup>
      </NavDropdown>
    )
  }

  handleClickItem(url) {
    Utils.open(url, true);
    console.log(`Alert from menu item.\neventKey: ${eventKey}`);
  }

  render() {
    const {
      navData,
    } = this.props;

    return (
      <div className="top-container">
        { navData.list ? this._renderNavbar(navData) : '' }
      </div>
    );
  }
}
