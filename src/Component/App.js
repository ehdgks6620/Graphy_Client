import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "../Router/Home";
import Detail from "../Router/Detail";
import Com from "../Router/Com";

export default function App(){
    return <Router>
        <Route exact path="/" component={Home}>
        </Route>
       
        <Route path="/:id" component={Com}>
        </Route>
    </Router>
}