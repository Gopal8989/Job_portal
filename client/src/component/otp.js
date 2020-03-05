import React from "react";
import "./Std.css";
const axios = require("axios");

class otp extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: {
        email: "",
        otp: ""
        // errors: {}
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.otp = this.otp.bind(this);
  }
  componentDidMount() {
    this.setState({ email: localStorage.getItem("tempMail:") });
    console.log(this.state.email);
  }

  handleChange(e) {
    let fields = this.state.fields;

    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
  }

  otp(e) {
    e.preventDefault();
    e.preventDefault();

    // if(this.validateFrom())
    // {
    //      let fields ={};
    //      this.setState({fields:fields});
    const userData = this.state.fields;
    console.log(this.state.fields);
    axios
      .post("http://localhost:5000/otp/" + this.state.fields.email, userData)
      .then(res => {
        console.log(res.data);
        if (res.data.msg == "1") {
          localStorage.setItem("tempMail:", this.state.fields.email);
          window.location.assign("/matchpassword");
        } else {
          alert("wrong OTP");
        }
      })

      .catch(err => {
        console.log(err);
      });
    // }
    // }
    // validateFrom()
    // {
    //         let fields=this.state.fields;
    //         let errors ={};
    //         let formIsValid =true;
    //         if (!fields["email"]) {
    //                 formIsValid = false;
    //                 errors["email"] = "*Please enter your email-.";
    //               }

    //               if (typeof fields["email"] !== "undefined") {
    //                 //regular expression for email valation
    //                 var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/);
    //                 if (!pattern.test(fields["email"])) {
    //                         formIsValid = false;
    //                 }
    //                         let lastAtPos = fields["email"].lastIndexOf('@');
    //                         let lastDotPos = fields["email"].lastIndexOf('.');

    //                 if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
    //                      formIsValid = false;
    //                   errors["email"] = "*Please enter val email-.";
    //                 }
    //               }
    //               if (!fields["otp"]) {
    //                 formIsValid = false;
    //                 errors["otp"] = "*Please enter your otp-.";
    //               }
    //               this.setState({
    //                 errors: errors
    //               });
    //               return formIsValid;
  }

  render() {
    return (
      <div className="Stt">
        <form onSubmit={this.otp}>
          <h3>verifyotp</h3>

          <div className="form-group">
            <label>Email_Id</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={this.state.fields.email || ""}
              onChange={this.handleChange} required
            />
            {/* <span className="badge"  style={{color: "red"}}>{this.state.errors.email}</span>  */}
          </div>

          <div className="form-group">
            <label>otp</label>
            <input
              type="otp"
              className="form-control"
              placeholder="Enter otp"
              name="otp"
              value={this.state.fields.otp || ""}
              onChange={this.handleChange} required
            />
            {/* <span className="badge"  style={{color: "red"}}>{this.state.errors.otp}</span> */}
          </div>

          <div className="form-group">
            <button className="button btn-info btn-block my-4" type="submit">
              OTP_VERIFY
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default otp;
