import React from "react";
import "./Std.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentWillMount() {
    if (
      sessionStorage.getItem("DatToken") != null &&
      sessionStorage.getItem("DatToken") != null
    ) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="/ho">
            <img
              src="https://as1.ftcdn.net/jpg/02/10/87/80/500_F_210878007_vIRqeFVZAeODdJ4dAbw4J8O6kLKzxUfi.jpg"
              className="rounded-circle float-left"
              alt="aligment"
            />
            <h1>jOBPORTAL</h1>
          </a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/ho">
                  JOB's
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              {this.state.loggedIn == false ? (
                <li className="class=nav-item dropdown">
                  <a
                    href="/Signup"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Signup
                  </a>
                  <div className="dropdown-menu">
                    <a href="/Signup_emp" className="dropdown-item">
                      Employee
                    </a>
                    <a href="/Signup_stu" className="dropdown-item">
                      Candidate
                    </a>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/Logout">
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default Menu;
