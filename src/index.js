import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {Provider} from 'react-redux';
//import {createStore} from 'redux';
//import allReducers from './Reducers';


/*const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/

//store.subscribe(()=>{console.log(store.getState())});


ReactDOM.render(
//<Provider store={store}>
<App />
//</Provider>
, 
document.getElementById('root'));


serviceWorker.unregister();
