
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import { Layout, Sidebar, Section, Footer } from 'fit-layout-global';

import 'whatwg-fetch'

class LoginPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {

    });
  }

  componentWillMount() {

  }

  render() {

    return (
      <Layout>
        <Sidebar width={500} direction="right">
          <div className="resume-view">
            
          </div>
        </Sidebar>
        <Section>
        </Section>
        <Footer height={40}>页尾</Footer>
      </Layout>
    );
  }
}

export default LoginPage;
