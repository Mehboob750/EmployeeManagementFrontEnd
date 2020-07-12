import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Register.scss";
import { Link } from '@material-ui/core';
import empService from '../../Services/EmployeeServices'
let service = new empService()

const nameRegex = RegExp(/^[A-Z]{1}[a-z]{2,}$/);
const emailRegex = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);
const phoneRegex = RegExp(/^([0-9]{2}[ ])?([1-9]{1}[0-9]{9})$/);
const passwordRegex = RegExp(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,})/);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(value => {
    value.length > 0 && (valid = false);
  });

  return valid;
};


export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      FirstName:null,
      LastName:null,
      Gender:null,
      PhoneNumber:null,
      EmailId:null,
      City:null,
      Password:null,
      ConfirmPassword:null,

      formErrors: {
        FirstName:'',
        LastName:'',
        Gender:'',
        PhoneNumber:'',
        EmailId:'',
        City:'',
        Password:'',
        ConfirmPassword:''
      }
    }
  }
  
  handleChange= (e)=> { 
    console.log(e.target.value);
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    //validation
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    
    switch (name) {

      case "FirstName":
        formErrors.FirstName = nameRegex.test(value) ? "" : "Invalid First Name";
        break;

      case "LastName":
        formErrors.LastName = nameRegex.test(value) ? "" : "Invalid Last Name";
        break;  

      case "Gender":
        formErrors.Gender = nameRegex.test(value) ? "" : "Invalid Gender";
        break;  

      case "PhoneNumber":
        formErrors.PhoneNumber = phoneRegex.test(value) ? "" : "Invalid Phone Number";
        break; 

      case "City":
        formErrors.City = nameRegex.test(value) ? "" : "Invalid City";
        break; 

      case "EmailId":
        formErrors.EmailId = emailRegex.test(value) ? "" : "Invalid Email Id";
        break;

      case "Password":
        formErrors.Password = passwordRegex.test(value) ?  "" : "Invalid Password";
        break;

      case "ConfirmPassword":
        formErrors.ConfirmPassword = passwordRegex.test(value) ? "" : "Invalid Password";
        break;

      default:
        break;
    }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }; 

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
      Password:this.state.Password,
      ConfirmPassword:this.state.ConfirmPassword
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
    const { formErrors } = this.state;
    return (
        <div class="login-box">
        <form class="registercontainer">
        <p class="title" align="center">
            <Typography component="h1" variant="h5">
             Register
            </Typography>
            </p>
             <Grid container spacing={5}>
            <Grid item xs={6}>
            <TextField 
            className={formErrors.FirstName.length > 0 ? "error" : null}
            name="FirstName" 
            label="First Name" 
            variant="outlined" 
            onChange={this.handleChange} 
            value={this.state.FirstName} required/>
            <div className="error">{formErrors.FirstName.length > 0 && (<span className="errorMessage">{formErrors.FirstName}</span>)} 
            </div> 
            </Grid>

            <Grid item xs={6}>
            <TextField 
            className={formErrors.LastName.length > 0 ? "error" : null}
            name="LastName" 
            label="Last Name" 
            variant="outlined" 
            onChange={this.handleChange} 
            value={this.state.LastName} required/> 
            <div className="error">{formErrors.LastName.length > 0 && (<span className="errorMessage">{formErrors.LastName}</span>)} 
            </div>           
            </Grid>

            <Grid item xs={6}>
            <TextField 
            className={formErrors.Gender.length > 0 ? "error" : null}
            name="Gender" 
            label="Gender" 
            variant="outlined" 
            onChange={this.handleChange} 
            value={this.state.Gender} required/>
            <div className="error">{formErrors.Gender.length > 0 && (<span className="errorMessage">{formErrors.Gender}</span>)} 
            </div> 
            </Grid>

            <Grid item xs={6}>
            <TextField 
            className={formErrors.PhoneNumber.length > 0 ? "error" : null}
            name="PhoneNumber" 
            label="Phone Number" 
            variant="outlined" 
            onChange={this.handleChange} 
            value={this.state.PhoneNumber} required/>
            <div className="error">{formErrors.PhoneNumber.length > 0 && (<span className="errorMessage">{formErrors.PhoneNumber}</span>)} 
            </div> 
            </Grid>

            <Grid item xs={6}>
            <TextField 
            className={formErrors.EmailId.length > 0 ? "error" : null}
            name="EmailId" 
            label="Email Id" 
            variant="outlined" 
            onChange={this.handleChange} 
            value={this.state.EmailId} required/>
            <div className="error">{formErrors.EmailId.length > 0 && (<span className="errorMessage">{formErrors.EmailId}</span>)} 
            </div> 
            </Grid>

            <Grid item xs={6}>
            <TextField 
            className={formErrors.City.length > 0 ? "error" : null}
            name="City" 
            label="City" 
            variant="outlined" 
            onChange={this.handleChange} 
            value={this.state.City} required/>
            <div className="error">{formErrors.City.length > 0 && (<span className="errorMessage">{formErrors.City}</span>)} 
            </div> 
            </Grid>

            <Grid item xs={6}>
            <TextField 
            className={formErrors.Password.length > 0 ? "error" : null}
            name="Password" 
            label="Password" 
            variant="outlined" 
            type="password" 
            onChange={this.handleChange} 
            value={this.state.Password} required/>
            <div className="error">{formErrors.Password.length > 0 && (<span className="errorMessage">{formErrors.Password}</span>)} 
            </div>      
            </Grid>

            <Grid item xs={6}>
            <TextField 
            className={formErrors.ConfirmPassword.length > 0 ? "error" : null}
            name="ConfirmPassword" 
            label="Confirm Password" 
            variant="outlined" 
            type="password" 
            onChange={this.handleChange} 
            value={this.state.ConfirmPassword} required/>
            <div className="error">{formErrors.ConfirmPassword.length > 0 && (<span className="errorMessage">{formErrors.ConfirmPassword}</span>)} 
            </div>      
            </Grid>

            <Grid item xs={12} className="footers">
            <div className="btn">
            <Button 
             variant="contained" 
             color="primary" 
             onClick={this.register} 
             className="submit"> Register </Button>
            </div>
             </Grid>
             </Grid>
             <div className="link">
             <Link href="/"  variant="body2"> {" Already have an account? Login"}</Link>
            </div>
            </form>
        </div>
    );
  }
}