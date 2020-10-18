import { combineReducers } from "redux";
import { toast } from "react-toastify";
import { createReducer } from "@reduxjs/toolkit";
import contactAction from "./contactActions";
import authActions from "../redux/auth/authActions";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const notifiation = () => {
  toast.info(`First, you have to enter the name!`, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

const addContact = (state, { payload }) => {
  if (payload.name.length >= 1) {
    return [...state, payload];
  } else {
    notifiation();
  }
};
const removeContact = (state, action) =>
  state.filter((items) => items.id !== action.payload);

const setFilter = (state, action) => action.payload.filter;

const items = createReducer([], {
  [contactAction.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactAction.addContactSuccess]: addContact,
  [authActions.logOutSuc]: (_) => [],
  [contactAction.delContactsSuccess]: removeContact,
});
const error = createReducer(null, {
  [contactAction.fetchContactsError]: (_, { payload }) => payload,
});

const filter = createReducer("", {
  [contactAction.doFilter]: setFilter,
});

export default combineReducers({
  items,
  filter,
  error,
});
