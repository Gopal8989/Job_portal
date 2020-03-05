import React from "react";
import "./Std.css";
const axios = require("axios");

class matchpassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      otp: ""
    };
    // this.submit=this.submit.bind(this);
  }
  componentDidMount() {
    this.setState({ email: localStorage.getItem("tempMail:") });
    console.log(this.state.email);
  }

  Mysubmit = e => {
    e.preventDefault();
    // if (this.checkpass()) {
    const userData = {
      email: this.state.email,
      password: document.getElementById("pass1").value
    };
    axios
      .post("http://localhost:5000/changepass", userData)
      .then(res => {
        console.log(res.data);
        if (res.data.msg == "1") {
          //   localStorage.setItem('tempMail:',this.state.fields.email);
          window.location.assign("/");
        } else {
          alert("enter the password");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  // checkpass = () => {
  //   let p1 = document.getElementById("pass1").value;
  //   let p2 = document.getElementById("pass2").value;
  //   let err = document.getElementById("passErr");
  //   console.log(p1, p2);
  //   if (p2 === "" || p1 === p2) err.innerHTML = "";
  //   if (p1 !== p2) err.innerHTML = "Password Not Match!!!!";
  // };
  render() {
    return (
      <div className="Stt">
        <form onSubmit={this.Mysubmit}>
          <h3>Change_password</h3>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="pass1"
            />
          </div>

          <div className="form-group">
            <label>Confrom_Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Confrom_Password"
              id="pass2"
            />
            {/* <span id="passErr" style={{ color: "red" }}></span> */}
          </div>

          <div className="form-group">
            <button className="button btn-info btn-block my-4" type="submit">
              VERIFY_PASSWORD
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default matchpassword;
