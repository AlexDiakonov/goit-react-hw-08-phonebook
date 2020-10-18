const isAuthorised = (state) => state.auth.token;
const getName = (state) => state.auth.user.name;
export default { isAuthorised, getName };
