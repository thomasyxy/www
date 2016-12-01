import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators, createStore } from 'redux';

import * as MainConstants from './constants';
import * as MainActivityActions from './actions';
import MainReducer from './reducers';

import TopBar from './components/top-bar';


class Index extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.loadInitData()
  }

  loadInitData(){
    const {
      loadInitPageData
    } = this.props;

    // loadInitPageData();

    store.dispatch({type: MainConstants.INIT_PAGE_DATA});
  }

  render() {
    let {
      navList,
      isLoading
    } = this.props;
    return (
      <div className="main-container">
        <TopBar
          navList={navList}
        />
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
