import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, PanelGroup, Panel, ListGroup, ListGroupItem, Clearfix } from 'react-bootstrap';
import {Button} from 'fit-button';
import Utils from '../../../../utils';

require('./index.scss');




export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0
    };
    this._renderNavbar = this._renderNavbar.bind(this);
    this._renderDropList = this._renderDropList.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  handleClick() {
    console.log('基本用法 点击')
  }

  _renderNavbar(navData) {
    return (
      <Navbar default collapseOnSelect>
        <Button className="top-menu-btn" onClick={this.handleClick.bind(this)}>
          &#xe622;
        </Button>
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
                  item.subList ? (
                    <NavDropdown key={key} title={item.title} id={`nav-dropdown-${key}`}>
                      {
                        this._renderDropList(item, key)
                      }
                    </NavDropdown>
                  ) : (
                    <NavItem key={key} onClick={() => { Utils.open(item.url) }}>
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
      <Clearfix>
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
        {
          item.subList.length !== 0 ? item.subList.map((subItem, subKey) =>
            <Panel collapsible key={subKey} header={subItem.title} eventKey={subKey}>
              <ListGroup fill onClick={ () => { this.handleClickItem(subItem.url) }}>
                {
                  subItem.typeList.length !== 0 ? subItem.typeList.map((terItem, terKey) =>
                    <ListGroupItem key={terKey} onClick={ () => { Utils.open(terItem.url, true) }}>
                      {terItem.title}
                    </ListGroupItem>
                  ) : ''
                }
              </ListGroup>
            </Panel>
          ) : ''
        }
        </PanelGroup>
      </Clearfix>
    )
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
