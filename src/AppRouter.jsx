import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FundsContainer from './containers/Funds/Funds.container';

import {Layout} from 'antd';

const AppRouter = () =>(
        <Router>
            <Layout className="layout">
                <Route exact path='/' component={FundsContainer}/>
            </Layout>
        </Router>
);

export default AppRouter;