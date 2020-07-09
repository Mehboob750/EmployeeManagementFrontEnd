import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Style.scss";
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
    <form class="container">
    <p class="title" align="center">
            <Typography component="h1" variant="h5">
             Register
            </Typography>
            </p>
         <Grid container spacing={5}>
            <Grid item xs={6}>
            <TextField name="FirstName" label="First Name" variant="outlined" onChange={this.handleChange} value={this.state.FirstName} />
            </Grid>
            <Grid item xs={6}>
            <TextField name="LastName" label="Last Name" variant="outlined" onChange={this.handleChange} value={this.state.LastName} />           
            </Grid>
            <Grid item xs={6}>
            <TextField name="Gender" label="Gender" variant="outlined" onChange={this.handleChange} value={this.state.Gender} />
            </Grid>
            <Grid item xs={6}>
            <TextField name="PhoneNumber" label="Phone Number" variant="outlined" onChange={this.handleChange} value={this.state.PhoneNumber} />
            </Grid>
            <Grid item xs={6}>
            <TextField name="EmailId" label="Email Id" variant="outlined" onChange={this.handleChange} value={this.state.EmailId} />
             </Grid>
             <Grid item xs={6}>
             <TextField name="City" label="City" variant="outlined" onChange={this.handleChange} value={this.state.City} />
              </Grid>
              <Grid item xs={6}>
              <TextField name="Password" label="Password" variant="outlined"  type="password" onChange={this.handleChange} value={this.state.Password} />     
            </Grid>
            <Grid item xs={12} className="footers">
                <div className="btn">
            <Button variant="contained" color="primary" onClick={this.register}  className="submit"> Register </Button>
            </div>
             </Grid>
             </Grid>
             <Link to="/"> {"Already have an account? Login"}</Link>
            </form>
        </div>
    );
  }
}