import React from 'react';
import Counter from './counter';
import Header from "./header/header";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {FirstPage, SecondPage} from "./pages";

const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/"
                       component={FirstPage}
                       exact />
                <Route path="/second"
                       component={SecondPage}/>           </Switch>
        </Router>
    );
};

export default App;