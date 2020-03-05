import React from 'react';
import Menu from './component/Menu';
import login_stu from './component/login_stu';
import Signup_stu from './component/Signup_stu';
import Signup_emp from './component/Signup_emp';
// import Home from './component/Home';
// import welcome from './component/welcome';
import Logout from './component/Logout';
import otp from './component/otp';
import NotFound from './component/NotFound';
 import "./../node_modules/bootstrap/js/src/dropdown.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import verify from './component/verify';
import matchpassword from './component/matchpassword';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
//import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};  
  }
  componentWillMount(){
   
      if(sessionStorage.getItem('DatToken') != null && sessionStorage.getItem('DatToken') != null){
          this.setState({loggedIn: true}); 
          
      } 
  }
  render() {
    return (<div>
       <BrowserRouter>
       <div>
            <Menu/>
            <Switch>     
               <Route exact path='/' component={login_stu}/>
               <Route path='/Signup_stu' component={Signup_stu}/>
               <Route  path='/Signup_emp' component={Signup_emp}/>
               {/* <Route  path='/Home' component={Home}/> */}
               <Route path='/logout' component={Logout}/> 
               <Route path='/NotFound' component={NotFound}/> 
               <Route path='/verify' component={verify}/> 
               <Route path='/matchpassword' component={matchpassword}/>
               <Route path='/otp' component={otp}/>
                    
           </Switch>
    </div> 
        
   </BrowserRouter>
</div>
   
       
  );
}
}

export default App;
