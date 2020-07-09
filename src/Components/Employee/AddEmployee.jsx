import React from "react";
import "../../Components/Login/Style.scss";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
export class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      FirstName:'',
      LastName:'',
      Gender:'',
      PhoneNumber:'',
      EmailID:'',
      City:''
    }
  }
  
  handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    
  }  

  render() 
  {
    return (
<div class="login-box">
    <form class="container">
    <p class="title" align="center">
            <Typography component="h1" variant="h5">
             Add Employee
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
            <Grid item xs={12} className="footers">
                <div className="btn">
            <Button variant="contained" color="primary" onClick={this.addEmployee}  className="submit"> Submit </Button>
            </div>
             </Grid>
             </Grid>
            </form>
        </div>
    );
  }
}