
import React, { PropTypes } from 'react';
import assign from 'object-assign';

import Paper from 'material-ui/Paper';

import LoginPage from './login-page';
import RegisterPage from './register-page';

class Container extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      curPage: 'login'
    });

    this.selectPage = this.selectPage.bind(this);
  }

  componentWillMount() {
  }

  selectPage(type) {
    this.setState({
      curPage: type
    })
  }


  render() {
    const {
      curPage
    } = this.state;

    const optionConfig = [
      {
        name: 'login',
        title: '登录',
        view: <LoginPage />
      },
      {
        name: 'register',
        title: '注册',
        view: <RegisterPage selectPage={this.selectPage} />
      }
    ]

    return <div className="page-container">
      <div className="page-option">
        {
          optionConfig.map((val, key) =>
            curPage !== val.name ? <span key={key} onClick={() => { this.selectPage(val.name) }}>{val.title}</span> : ''
          )
        }
      </div>
      {
        optionConfig.map((val, key) =>
          curPage === val.name ? <div className="part-container" key={key}>{val.view}</div> : ''
        )
      }
    </div>
  }
}

export default Container;
