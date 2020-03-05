// import React from "react";
// import "./Std.css";
// const axios = require("axios");

// class login_stu extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       fields: {}
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.login_stu = this.login_stu.bind(this);
//   }

//   handleChange(e) {
//     let fields = this.state.fields;

//     fields[e.target.name] = e.target.value;

//     this.setState({
//       fields
//     });
//   }

//   login_stu(e) {
//     e.preventDefault();
//     const userData = this.state.fields;
//     console.log(this.state.fields);
//     axios
//       .post("http://localhost:5000/login", userData)
//       .then(res => {
//         console.log(res.data);
//         const Dat = { DatToken: res.data.token };

//         console.log(Dat);

//         sessionStorage.setItem("DatToken", JSON.stringify(Dat));

//         console.log(res);
//         window.location.assign("/NotFound");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   render() {
//     return (
//       <div className="Stt">
//         <form onSubmit={this.login_stu}>
//           <h3>login</h3>

//           <div className="form-group">
//             <label>Email_Id</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               name="email" required
//               value={this.state.fields.email || ""}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               name="password" required
//               value={this.state.fields.password || ""}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <button className="button btn-info btn-block my-4" type="submit">
//               login
//             </button>
//           </div>
//           <label>new user/</label>
//           <a href="/Signup_stu">Signup_Candidate</a>
//           <br></br>
//           <label>OR/</label>
//           <a href="/Signup_emp">Signup_employee</a>
//           <br></br>
//           <label>*Forget password*</label>
//           <a href="/verify">click</a>
//         </form>
//       </div>
//     );
//   }
// }
// export default login_stu;

import React from "react";
import "./Std.css";
const axios = require("axios");

class login_stu extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.login_stu = this.login_stu.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;

    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
  }

  login_stu(e) {
    e.preventDefault();
    const userData = this.state.fields;
    console.log(this.state.fields);
    axios
      .post("http://localhost:5000/login", userData)
      .then(res => {
        console.log(res.data);
        const Dat =res.data.token;

        console.log(Dat);

        sessionStorage.setItem("token",Dat);
        window.location.assign("/NotFound");

        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="Stt">
        <form onSubmit={this.login_stu}>
          <h3>login</h3>

          <div className="form-group">
            <label>Email_Id</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={this.state.fields.email || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={this.state.fields.password || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <button className="button btn-info btn-block my-4" type="submit">
              login
            </button>
          </div>
          <label>new user/</label>
          <a href="/Signup_stu">Signup_Candidate</a>
          <br></br>
          <label>OR/</label>
          <a href="/Signup_emp">Signup_employee</a>
          <br></br>
          <label>*Forget password*</label>
          <a href="/verify">click</a>
          {/* <a href="/NotFound">click</a> */}
        </form>
      </div>
    );
  }
}
export default login_stu;



