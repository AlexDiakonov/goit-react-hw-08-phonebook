import { createAction } from "@reduxjs/toolkit";

const registerReq = createAction("auth/regReq");
const registerSuc = createAction("auth/regSuc");
const registerErr = createAction("auth/regErr");

const tokenReq = createAction("auth/tokenReq");
const tokenSuc = createAction("auth/tokenSuc");
const tokenErr = createAction("auth/tokenErr");

const loginReq = createAction("auth/loginReq");
const loginSuc = createAction("auth/loginSuc");
const loginErr = createAction("auth/loginErr");

const logOutReq = createAction("auth/logOutReq");
const logOutSuc = createAction("auth/logOutSuc");
const logOutErr = createAction("auth/logOutErr");

const getCurrUserReq = createAction("auth/getCurrUserReq");
const getCurrUserSuc = createAction("auth/getCurrUserSuc");
const getCurrUserErr = createAction("auth/getCurrUserErr");

export default {
  registerReq,
  registerSuc,
  registerErr,

  tokenReq,
  tokenSuc,
  tokenErr,

  loginReq,
  loginSuc,
  loginErr,

  logOutReq,
  logOutSuc,
  logOutErr,

  getCurrUserReq,
  getCurrUserSuc,
  getCurrUserErr,
};
