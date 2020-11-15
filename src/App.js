import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import store from './store/index';
import Header from './common/header/index';
import Home from './page/home/index';
// import Detail from './page/detail/index';
import Detail from './page/detail/loadable.js';

import Write from './page/write/index';
import Login from './page/login/index';

function App() {
    return (
      <Provider store = {store}>
        <div>
          <BrowserRouter>
            <Header></Header>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id'exact component={Detail}></Route>
              <Route path='/details'exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
}


export default App;
