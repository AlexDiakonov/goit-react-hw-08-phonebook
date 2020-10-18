import React, { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactsList.jsx";
import style from "../../ModuleStyles/PhoneBook.module.css";
import { CSSTransition } from "react-transition-group";
import "../../ModuleStyles/animations.css";
import ParticlesBg from "particles-bg";
import { connect } from "react-redux";
import contactOperation from "../../redux/contactOperations";
import contactSelector from "../../redux/contactsSelectors";
import authSelectors from "../../redux/auth/authSlectors";

class Phonebook extends Component {
  componentDidMount() {
    if (!this.props.auth) {
      this.props.history.replace("/login");
      return;
    }
    this.props.onFetchContacts(this.props.token);
  }
  componentDidUpdate() {
    if (!this.props.auth) {
      this.props.history.replace("/login");
      return;
    }
  }
  render() {
    const { contacts } = this.props;
    return (
      <div className={style.phonebook}>
        {this.props.auth && <ParticlesBg type="circle" bg={true}></ParticlesBg>}

        <CSSTransition
          appear={true}
          in={true}
          timeout={2000}
          unmountOnExit
          classNames="logo"
        >
          <h2>Phonebook</h2>
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter />}

        <ContactList />
      </div>
    );
  }
}
const mSTP = (state) => ({
  contacts: contactSelector.getContacts(state),
  token: state.auth.token,
  auth: authSelectors.isAuthorised(state),
});
const mDTP = {
  onFetchContacts: contactOperation.fetchContacts,
};

export default connect(mSTP, mDTP)(Phonebook);
