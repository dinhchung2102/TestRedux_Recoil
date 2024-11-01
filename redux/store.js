import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Đảm bảo đường dẫn đúng

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
