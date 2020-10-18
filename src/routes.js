import Phonebook from "./Components/phonebook/PhoneBook.jsx";
import Register from "./Components/registration/Register.jsx";
import Login from "./Components/Login/Login.jsx";

export default {
  phonebook: {
    path: "/phonebook",
    Component: Phonebook,
  },
  register: {
    path: "/register",
    Component: Register,
  },
  login: {
    path: "/login",
    Component: Login,
  },
};
