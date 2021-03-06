import React from 'react';
import { Router } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import history from './../modules/History';

const BasicRouter = () => (
    <Router history={history}>
        <div id="colorbook">
            {/* <Navbar /> */}
            {/* <div className="content"> */}
            <HomeRoute />
            {/* </div> */}
            {/* <Footer /> */}
        </div>
    </Router>
);

export default BasicRouter;
