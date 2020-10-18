import React, { Component } from "react";
import styles from "../../ModuleStyles/PhoneBook.module.css";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
class Register extends Component {
  state = { name: "", password: "", email: "" };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState({ name: "", password: "", email: "" });
  };
  render() {
    const { email, password, name } = this.state;
    return (
      <form className={styles.registerForm} onSubmit={this.handleSubmit}>
        <span className={styles.details2}>Name: </span>
        <input
          className={styles.regInput}
          type="text"
          name="name"
          value={name}
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
        <br></br>
        <span className={styles.details2}>Email:</span>
        <input
          className={`${styles.emailInput} ${styles.regInput}`}
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        ></input>
        <button
          className={styles.addContactBtn}
          onSubmit={this.handleSubmit}
          type="submit"
        >
          Register Me
        </button>
      </form>
    );
  }
}
export default connect(null, { onRegister: authOperations.register })(Register);
