import React from "react";
import { connect } from "react-redux";
import authSlectors from "../../redux/auth/authSlectors";

import "../../ModuleStyles/userFace.css";
import authOperations from "../../redux/auth/authOperations";

function userFace({ onLogout, name }) {
  const img =
    "https://www.funnyjunksite.com/pictures/wp-content/uploads/2015/08/Funny-Avatar-Photo.jpg";
  return (
    <div className="userContainer">
      <img className="avatar" src={img} width="60"></img>
      <div className="nameContainer">
        <span>Hello there, {name}</span>
        <br></br>
        <button className="logoutBTN" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: authSlectors.getName(state),
});
export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  userFace
);
