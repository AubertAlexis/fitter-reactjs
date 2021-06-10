// SCSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.scss';

import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import Home from "./pages/Home/Home"
import { Layout } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import Room from "./pages/Room/Room"
import heart from "./assets/img/heart_.png"

const {Content , Footer} = Layout;
ReactDOM.render(
            <Router>
                <Switch>
    <Layout>
        <Content>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/room" exact>
                        <Room></Room>
                    </Route>
        </Content>
        <Footer>
            <Link to="/">
            <img src={heart} alt="Heart Fitter" />
            </Link>
        </Footer>
    </Layout>
                </Switch>
            </Router>
    ,

    document.getElementById("root")
);
