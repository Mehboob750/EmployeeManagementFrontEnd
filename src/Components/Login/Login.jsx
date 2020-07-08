import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./Style.css";
import { Component } from 'react';
import { Link } from "react-router-dom";
import loginImage from "../../Assets/login.png";
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
        <div>
          <fieldset>
            <form  class="container">
               <h2 align="center">Login</h2>
               <TextField id="outlined-basic" label="Email Id" variant="outlined" onChange={this.handleChange} value={this.state.Email} />
                 {/* <p>Email Id</p> */}
                    {/* <input type="email" id="email" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter Email Id" title="Email Id is required" required/> */}
                 {/* /<p>Password</p> */}
                   {/* // <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password"  title="Password is required" required/> */}
                    <TextField id="outlined-basic" label="Password" variant="outlined" onChange={this.handleChange} value={this.state.Password} />
                 <div className="footer">
                 <button type="button" onClick={this.login} className="btn"> Login </button>
                     <Link to="/register"><button type="button" className="btn">Register</button></Link>
                </div>
             </form>
          </fieldset>
        </div>
      );
    }
  }