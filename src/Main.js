
import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import forms from "./forms"
import SimpleMap from "./SimpleMap"
import Gallery from "./gallery"

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Welcome</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/forms">Forms</NavLink></li>
              <li><NavLink to="/SimpleMap">SimpleMap</NavLink></li>
              <li><NavLink to="/Gallery">Gallery</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/forms" component={forms}/>
                <Route path="/SimpleMap" component={SimpleMap}/>
                <Route path="/Gallery" component={Gallery}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
  export default Main;