import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators, createStore } from 'redux';
import * as MainConstants from './constants';
import * as MainActivityActions from './actions';
import MainReducer from './reducers'


class Index extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="index">
        <p>{this.props.text}</p>
        <input defaultValue={this.props.name} onChange={this.props.onChange} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name
  };
}

function mapDispatchToActions(dispatch) {
    return bindActionCreators(MainActivityActions, dispatch);
}

const store = createStore(MainReducer);
const App = connect(mapStateToProps, mapDispatchToActions)(Index);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
