import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter';

import 'antd/dist/antd.css'

import unregister from './utils/interceptors';



ReactDOM.render(<AppRouter/>,document.getElementById('app'));

if(module.hot){
    module.hot.accept('./AppRouter.jsx',()=>{
        const AppRouter = require('./AppRouter').default;
        ReactDOM.render(<AppRouter/>,document.getElementById('app'));
    });
}