import React from "react";
import "./Std.css";
const axios = require("axios");

class Signup_stu extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      data: [],
      dataa: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.Signup_stu = this.Signup_stu.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;

    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
  async componentDidMount() {
    const response = await fetch(`http://localhost:5000/api/categary`);
    const json = await response.json();
    // console.log(json);
    this.setState({ data: json });
    // console.log(data.json);

    const respo = await fetch(`http://localhost:5000/api/Industray`);
    const jsonn = await respo.json();
    // console.log(json);
    this.setState({ dataa: jsonn });
  }

  Signup_stu(e) {
    e.preventDefault();

    if (this.validateFrom()) {
      let fields = {};

      this.setState({ fields: fields });
      const userData = this.state.fields;
      userData.role = 1;
      userData.fullname = userData.name + "" + userData.last;

      console.log(this.state.fields);
      axios
        .post("http://localhost:5000/api/user", userData)
        .then(res => {
          console.log(res.data);

          if (res.data.msg == "1") {
            localStorage.setItem("tempMail:", this.state.fields.email);
            window.location.assign("/");
          } else {
            alert("wrong details");
          }
        })
        .catch(err => {
          console.log(err);
          alert("EROOR");
        });
    }
  }

  validateFrom() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    // alert("successfull");
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter Name.";
    }

    if (typeof fields["name"] != "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*alphabet characters only.";
      }
    }

    if (!fields["last"]) {
      formIsValid = false;
      errors["last"] = "*Please enter  lastName.";
    }

    if (typeof fields["last"] != "undefined") {
      if (!fields["last"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["last"] = "*alphabet characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter  email-.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email valation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
      }
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "*Please enter val email-.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter  password-.";
    }

    if (typeof fields["password"] !== "undefined") {
      //regular expression for password valation
      var patternn = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/
      );
      if (!patternn.test(fields["password"])) {
        formIsValid = false;
        errors["password"] = "*Please enter val password-.";
      }
    }
    if (!fields["password2"]) {
      formIsValid = false;
      errors["password2"] = "*Please enter confrom_password-.";
    }

    // if (typeof (fields["password"] !== (fields["password2"]))) {
    //         // formIsValid = false;
    //   errors["password2"] = "*Please enter correct pass";
    // }

    if (!fields["mobile"]) {
      formIsValid = false;
      errors["mobile"] = "*Please enter  mobile no.";
    }

    if (typeof fields["mobile"] !== "undefined") {
      if (!fields["mobile"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobile"] = "*Please enter mobile no.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.Signup_stu}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <div className="form-row mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First_Name"
                  name="name"
                  value={this.state.fields.name || ""}
                  onChange={this.handleChange}
                />
                <span className="badge" style={{ color: "red" }}>
                  {this.state.errors.name}
                </span>
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="last"
                  placeholder="Last_Name"
                  value={this.state.fields.last || ""}
                  onChange={this.handleChange}
                />
                <span className="badge" style={{ color: "red" }}>
                  {this.state.errors.last}
                </span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.state.fields.email || ""}
              onChange={this.handleChange}
            />
            <span className="badge" style={{ color: "red" }}>
              {this.state.errors.email}
            </span>
          </div>

          <div className="form-row mb-4">
            <div className=" col-md-6">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={this.state.fields.password || ""}
                onChange={this.handleChange}
              />
              <span className="badge" style={{ color: "red" }}>
                {this.state.errors.password}
              </span>
            </div>

            <div className=" col-md-6">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="password2"
                value={this.state.fields.password2 || ""}
                onChange={this.handleChange}
              />
              <span className="badge" style={{ color: "red" }}>
                {this.state.errors.password2}
              </span>
            </div>
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Mobile_Number"
              name="mobile"
              value={this.state.fields.mobile || ""}
              onChange={this.handleChange}
            />
            <span className="badge" style={{ color: "red" }}>
              {this.state.errors.mobile}
            </span>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Select Industry:</label>

              <div>
                <select
                  required
                  className="form-control"
                  name="Industry"
                  value={this.state.fields.Industry || ""}
                  onChange={this.handleChange}
                >
                  {this.state.data.map((el, i) => (
                    <option key={i}>{el.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group col-md-6">
              <label>Select Categary:</label>
              <select
                required
                className="form-control"
                name="categary"
                value={this.state.fields.categary || ""}
                onChange={this.handleChange}
                autoComplete="off"
              >
                {this.state.dataa.map((el, i) => (
                  <option key={i}>
                    {/* {el.id}: {el.name} */}
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="input-group form-row mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text">Upload</span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                placeholder="Candidate_id"
                aria-describedby="inputGroupFileAddon01"
                name="file"
                value={this.state.fields.file || ""}
                onChange={this.handleChange}
                required
              />
              <label className="custom-file-label">PROFILE</label>
            </div>
          </div>

          <div className="form-group">
            <button className="btnn btn-info btn-block my-4" type="submit">
              Signin_can
            </button>
          </div>

          <div className="hint-text">
            Already have an account? <a href="/">Login here</a>
          </div>
        </form>
      </div>
    );
  }
}
export default Signup_stu;
