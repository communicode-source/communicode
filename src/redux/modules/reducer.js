import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default apiClient => combineReducers({
  routing: routerReducer,
  apollo: apiClient.reducer()
});
