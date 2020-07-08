import React from "react";
import "../../Components/Login/Style.css";
import Grid from '@material-ui/core/Grid';
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
      <div className="base-container" ref={this.props.containerRef}>
       <fieldset>
            <form  class="container">
        <h2 align="center">Add Employee</h2>
         <Grid container spacing={5}>
            <Grid item xs={6}>
            First Name
            <input type="text" name="firstname" onChange={this.handleChange} value={this.state.FirstName} placeholder="Enter First Name" />
            </Grid>
            <Grid item xs={6}>
            Last Name
            <input type="text" name="lastname" onChange={this.handleChange} value={this.state.LastName} placeholder="Enter Last Name" />
            </Grid>
            <Grid item xs={6}>
            Gender
            <input type="text" name="Gender" onChange={this.handleChange} value={this.state.Gender} placeholder="Enter Gender" />
            </Grid>
            <Grid item xs={6}>
            Phone Number
            <input type="text" name="number" onChange={this.handleChange} value={this.state.PhoneNumber} placeholder="Enter Phone Number" />
            </Grid>
            <Grid item xs={12}>
             Email ID
              <input type="email" name="EmailID" onChange={this.handleChange} value={this.state.EmailID} placeholder="Enter Email Id" />
             </Grid>
             <Grid item xs={12}>
              City
              <input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="Enter City" />
              </Grid>
               <div className="footer">
              <button type="button" onClick={this.addEmployee} className="btn btn-success">Submit</button>
            </div>
            </Grid>
        </form>
          </fieldset>
        </div>
    );
  }
}