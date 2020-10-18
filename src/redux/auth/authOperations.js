import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = (userData) => (dispatch) => {
  dispatch(authActions.registerReq);
  axios
    .post("/users/signup", userData)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registerSuc(data));
    })
    .catch((error) => dispatch(authActions.registerErr(error)));
};

const login = (userData) => (dispatch) => {
  dispatch(authActions.loginReq());
  axios
    .post("/users/login", userData)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuc(data));
    })
    .catch((error) => dispatch(authActions.loginErr(error)));
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logOutReq());

  axios
    .post("users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logOutSuc());
    })
    .catch((err) => dispatch(authActions.logOutErr(err)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: currentToken },
  } = getState();
  if (!currentToken) {
    return;
  }
  token.set(currentToken);
  dispatch(authActions.getCurrUserReq());

  axios
    .get("users/current")
    .then(({ data }) => dispatch(authActions.getCurrUserSuc(data)))
    .catch((err) => dispatch(authActions.getCurrUserErr(err)));
};
export default { register, login, logOut, getCurrentUser };

// {data: token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjg4NzU3ODI0NTUwNjAwMTdlMTI0ODYiLCJpYXQiOjE2MDI3Nzg0ODh9.VytUs6sprYh9-j0_Yx1JY1t7ZbEqW7d4GRinwzD8UOA";
// user: email: "alex@alex.gmail";
// name: "Alexd";}

// yuriy@gmail.com
