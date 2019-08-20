import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from "./container/app"
import reducers from './reducers'
import Form from "./components/form"



const createStoreWithMiddleware = applyMiddleware()(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
     <App />
     {/* <Form/> */}
    </Provider>
, document.getElementById('root'));
