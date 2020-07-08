import React from "react";
import Grid from '@material-ui/core/Grid';
import "./Style.css";
import {Link } from "react-router-dom";
import empService from '../../Services/EmployeeServices'
let service = new empService()

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      FirstName:'',
      LastName:'',
      Gender:'',
      EmailId:'',
      City:'',
      Password:''
    }
  }
  
  handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    
  }  

  register=(e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData ={
      FirstName:this.state.FirstName,
      LastName:this.state.LastName,
      Gender:this.state.Gender,
      PhoneNumber:this.state.PhoneNumber,
      EmailId:this.state.EmailId,
      City:this.state.City,
      Password:this.state.Password
    }
    service.register(requestData).then((data)=>{
      this.props.history.push("/");
      console.log(" Registration Successful ", data);
      
    }).catch((err)=>{
      console.log(err);
      
    })


  }
  render() 
  {
  return (
  <div class="login-box">
  <fieldset>
            <form  class="container">
        <h2 align="center">Register</h2>
         <Grid container spacing={5}>
            <Grid item xs={6}>
            First Name
            <input type="text" name="FirstName" onChange={this.handleChange} value={this.state.FirstName} placeholder="Enter First Name" />
            </Grid>
            <Grid item xs={6}>
            Last Name
            <input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} placeholder="Enter Last Name" />
            </Grid>
            <Grid item xs={6}>
            Gender
            <input type="text" name="Gender" onChange={this.handleChange} value={this.state.Gender} placeholder="Enter Gender" />
            </Grid>
            <Grid item xs={6}>
            Phone Number
            <input type="text" name="PhoneNumber" onChange={this.handleChange} value={this.state.PhoneNumber} placeholder="Enter Phone Number" />
            </Grid>
            <Grid item xs={12}>
             Email ID
              <input type="email" name="EmailId" onChange={this.handleChange} value={this.state.EmailId} placeholder="Enter Email Id" />
             </Grid>
             <Grid item xs={6}>
              City
              <input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="Enter City" />
              </Grid>
              <Grid item xs={6}>
              Password
            <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password" />         
            </Grid>
               <div className="footer">
              <button type="button" onClick={this.register} className="btn">Register</button>
              <Link to="/"><button type="button" className="btn">Login</button></Link>
            </div>
            </Grid>
        </form>
          </fieldset>
      </div>
    );
  }
}