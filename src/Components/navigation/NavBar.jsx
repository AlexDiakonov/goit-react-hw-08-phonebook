import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "../../ModuleStyles/navBar.module.css";
import UserFace from "./userFace";
import authSlectors from "../../redux/auth/authSlectors";
import { connect } from "react-redux";
class NavBar extends Component {
  render() {
    const authStatus = this.props.isAuthorised;
    return (
      <header className={style.navBar}>
        <NavLink
          activeClassName={style.isActive}
          className={style.navLink}
          to="/register"
        >
          Register
        </NavLink>

        {authStatus ? (
          <UserFace />
        ) : (
          <NavLink
            activeClassName={style.isActive}
            className={style.navLink}
            to="/login"
          >
            Log in
          </NavLink>
        )}

        <NavLink
          activeClassName={style.isActive}
          className={style.navLink}
          to="/phonebook"
        >
          Phone Book
        </NavLink>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthorised: authSlectors.isAuthorised(state),
});
export default connect(mapStateToProps)(NavBar);
