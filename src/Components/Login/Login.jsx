import React, { Component } from "react";
import styles from "../../ModuleStyles/PhoneBook.module.css";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import authSlectors from "../../redux/auth/authSlectors";

class Login extends Component {
  state = { email: "", password: "" };
  componentDidUpdate() {
    if (this.props.isAuth) {
      this.props.history.replace("/phonebook");
      return;
    }
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ email: "", password: "" });
  };
  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.registerForm} onSubmit={this.handleSubmit}>
        <span className={styles.details2}>Email:</span>
        <input
          className={`${styles.emailInput} ${styles.regInput}`}
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        ></input>
        <br></br>
        <span className={styles.details2}>Password:</span>
        <input
          className={styles.regInput}
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        ></input>
        <button
          className={styles.addContactBtn}
          onSubmit={this.handleSubmit}
          type="submit"
        >
          Log Me In
        </button>
      </form>
    );
  }
}
const mSTP = (state) => ({
  isAuth: authSlectors.isAuthorised(state),
});
export default connect(mSTP, { onLogin: authOperations.login })(Login);
