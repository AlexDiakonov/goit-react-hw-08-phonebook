import contactAction from "./contactActions";
import axios from "axios";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const addContact = (name, number) => (dispatch) => {
  dispatch(contactAction.addContactRequest());
  axios
    .post("/contacts", {
      name,
      number,
    })
    .then(({ data }) => {
      dispatch(contactAction.addContactSuccess(data));
    })
    .catch((error) => {
      dispatch(contactAction.addContactError(error));
    });
};

const fetchContacts = (tok) => (dispatch) => {
  token.set(tok);
  dispatch(contactAction.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => {
      dispatch(contactAction.fetchContactsSuccess(data));
    })
    .catch((error) => {
      dispatch(contactAction.fetchContactsError(error));
    });
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactAction.delContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactAction.delContactsSuccess(id)))
    .then((error) => contactAction.delContactsError(error));
};

export default { addContact, fetchContacts, removeContact };
