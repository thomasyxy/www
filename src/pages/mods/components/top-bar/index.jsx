import React from 'react';

import { Menu, RightMenu, MenuItem, SubMenu } from 'fit-menu'
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
  }

  componentWillMount() {
  }

  _renderNavbar(navData) {
    return (
      <Menu>
        <MenuItem brand>首页</MenuItem>
        { navData.list && navData.list.length > 0 ? this._renderDropList(navData.list, 1) : '' }
      </Menu>
    )
  }

  _renderDropList(list, level){
    return list.map((item, key) =>
      item.list && item.list.length > 0 ?
      <SubMenu className={`menu-l-${level}`} key={key} title={item.title}>
        { this._renderDropList(item.list, level + 1) }
      </SubMenu>
     :
      <MenuItem className={`item-l-${level}`} key={key} onClick={() => { Utils.open(item.url, true) }}>
        { item.title }
      </MenuItem>
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
