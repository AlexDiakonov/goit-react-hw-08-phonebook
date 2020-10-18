import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "./authActions";

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [authActions.registerSuc]: (_, { payload }) => payload.user,
  [authActions.loginSuc]: (_, { payload }) => payload.user,
  [authActions.logOutSuc]: () => initialState,
  [authActions.getCurrUserSuc]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuc]: (_, { payload }) => payload.token,
  [authActions.loginSuc]: (_, { payload }) => payload.token,
  [authActions.logOutSuc]: () => null,
});

const error = createReducer(null, {
  [authActions.registerErr]: (_, { payload }) => payload,
  [authActions.loginErr]: (_, { payload }) => payload,
  [authActions.logOutErr]: (_, { payload }) => payload,
  [authActions.getCurrUserErr]: (_, { payload }) => payload,
  [authActions.logOutSuc]: () => null,
});
export default combineReducers({ user, error, token });
