import React from "react";
import "./Style.css";
import {Link } from "react-router-dom";
import loginImage from "../../Assets/login.png";

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
        Password:this.state.Password,
      }
      
    }
    render() 
    {
      return (
        <div>
          <fieldset>
            <form  class="container">
               <h2 align="center">Login</h2>
                 <p>Email Id</p>
                    <input type="email" id="email" name="email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter Email Id" title="Email Id is required" required/>
                 <p>Password</p>
                    <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password"  title="Password is required" required/>
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