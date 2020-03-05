import React from "react";
class Logout extends React.Component {
  componentDidMount() {
    sessionStorage.clear();
    window.location.assign("/");
  }

  render() {
    return (
      <div>
        <h1>you are logout</h1>
      </div>
    );
  }
}

export default Logout;
