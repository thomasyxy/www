import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainConstants from './constants';


class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      s: 123
    }
  }

  render() {
    return (
      <div>
        {s}
      </div>
    )
  }
}

function mapStatesToProps(state) {
  return state;
}

function mapDispatchToActions(dispatch) {
    return bindActionCreators(MainActivityActions, dispatch);
}

let store = MainConstants;
let App = connect(mapStatesToProps, mapDispatchToActions)(Index);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
