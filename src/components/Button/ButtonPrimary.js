import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ButtonPrimary = () => {
  return (
    <div className="main-section__element-button primary-button">
      <span></span>
      <div className="mask">
        <div className="ring">
          <Router>
            <Link to="/example"></Link>
            <Switch>
              <Route path="/example" component={Example}>
                <Example />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

class Example extends React.Component {
  render() {
    return <h2>Example333</h2>;
  }
}

export default ButtonPrimary;
