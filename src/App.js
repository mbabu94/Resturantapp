import React from "react";
import Navigation from "./Components/Navigation";
import PageRenderer from './page-renderer'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route path=":/page" component={PageRenderer} />
                    <Route path="/" render={() => <Redirect to="/home" />} />
                    <Route component={() => 404} />
                </Switch>
            </div>
        </Router>
    );
}
export default App;
