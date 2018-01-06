import configureStore from './createStore';
// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`

const initialState = {};
const store = configureStore(initialState);

export default store;
