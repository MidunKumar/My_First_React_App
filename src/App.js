import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./components/home";

import Pie from "./components/pie";
import Line from "./components/line";
import Bar from "./components/bar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Walmart</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>{" "}
            </li>

            <li>
              <NavLink to="/pie">Pie</NavLink>
            </li>
            <li>
              <NavLink to="/line">Line</NavLink>
            </li>
            <li>
              <NavLink to="/bar">Bar</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/pie" component={Pie} />
          </div>

          <div className="content">
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/line" component={Line} />
          </div>

          <div className="content">
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/bar" component={Bar} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
