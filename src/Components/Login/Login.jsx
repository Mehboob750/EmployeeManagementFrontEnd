import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Style.scss";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import empService from '../../Services/EmployeeServices';
let service = new empService()

export class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        Email:'',
        Password:''
      }
    }
    
    handleChange= (e)=> { 
      console.log(e.target.value);
      this.setState({[e.target.name]:e.target.value});  
      console.log(this.state);
      
    }  
    //method for login
    login=(e) => {
      e.preventDefault();
      console.log(this.state);
      let requestData ={
        Email:this.state.Email,
        Password:this.state.Password
      }
      
      service.login(requestData).then((json)=>{
        this.props.history.push("/dashboard");
        console.log("responce data==>",json);
      if(json.data.status==='Success'){  
      alert('Login Sucessfull !!');  
      }   
        
      }).catch((err)=>{
        console.log(err);
        
      })

    }
    render() 
    {
      return (
        <form class="container">
          
          <p class="title" align="center">
          <Typography component="h1" variant="h5">
          Login
        </Typography>
        </p>
              <div className="text">
               <TextField id="outlined-basic" label="Email Id" variant="outlined" onChange={this.handleChange} value={this.state.Email} />
                </div>

                <div className="text">
                <TextField id="outlined-basic" label="Password" variant="outlined" onChange={this.handleChange} value={this.state.Password} />
                </div>

                <Grid item xs={12} className="footers">
                <div className="btn">
                 <Button variant="contained" color="primary" onClick={this.login}  className="submit">
                 Login
                  </Button>
                  </div>
                  </Grid>
                     <Link to="/register"> {"Don't have an account? Register"}</Link>
      
        </form>
      );
    }
  }