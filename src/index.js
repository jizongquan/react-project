import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from'./style.js';
import {Globaliconfont} from './statics/iconfont/iconfont';

ReactDOM.render(
    <div>
       <App />
       <Globalstyle/>
       <Globaliconfont/>
    </div>,
  document.getElementById('root')
);
