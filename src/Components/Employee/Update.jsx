import React from "react";
import Grid from '@material-ui/core/Grid';
import "./Update.css";

export class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state={
   
     
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
        <div className="header">Update Employee Details</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
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
                </Grid>
             </div> 
        </div>
        <div className="footer"> 
          <button type="button" onClick={this.update} className="btn">
            Submit
          </button>
        </div>
        </div>
       </div>
    
    );
  }
}