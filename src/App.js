import React, { Component } from "react";
import NavBar from "./Components/navigation/NavBar";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import authOperations from "./redux/auth/authOperations";
import authSlectors from "./redux/auth/authSlectors";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onGetUser();
  }
  render() {
    const { phonebook, register, login } = routes;
    return (
      <>
        <NavBar />
        <Switch>
          <Route path={phonebook.path} component={phonebook.Component} />
          <Route path={register.path} component={register.Component} />
          <Route path={login.path} component={login.Component} />
          {!this.props.isAuth ? (
            <Redirect to={login.path} />
          ) : (
            <Redirect to={phonebook.path} />
          )}
        </Switch>
      </>
    );
  }
}
const mSTP = (state) => ({
  isAuth: authSlectors.isAuthorised(state),
});
export default connect(mSTP, { onGetUser: authOperations.getCurrentUser })(App);
