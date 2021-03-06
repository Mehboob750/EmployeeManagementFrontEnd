import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { AddEmployee } from './Components/Employee/AddEmployee';
import { GetAllEmployee } from './Components/Employee/GetAllEmployee';
import { Update } from './Components/Employee/Update'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard/addEmployee" component={AddEmployee} />
      <Route exact path="/dashboard" component={GetAllEmployee} />
      <Route path="/dashboard/update" component={Update} />
      </Router>
      </div>
    );
  }
}
export default App;