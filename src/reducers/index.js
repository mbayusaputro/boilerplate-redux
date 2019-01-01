import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';

import Route from '../components/Route';
import product from './product';

const reducerRouter = createNavigationReducer(Route);

const reducers = combineReducers({
  router: reducerRouter,
  product: product
});

export default reducers;