import React from 'react';
import {Provider, connect} from 'react-redux';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';
import store from './src/redux/store';
import Route from './src/components/Route';

const App = reduxifyNavigator(Route, 'root');

const mapStateToProps = (state) => ({
  state:state.router,
})

const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;