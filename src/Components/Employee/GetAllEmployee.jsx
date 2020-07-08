import React from "react";
import Table from '@material-ui/core/Table';  
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';  
import TableRow from '@material-ui/core/TableRow'; 
import TableHead from '@material-ui/core/TableHead';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableBody from '@material-ui/core/TableBody';  
import {Link } from "react-router-dom";


import "./Table.css";

export class GetAllEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Employee: []
    }
  }

  render() {
    return (
      <TableContainer component={Paper}> 
      <h2 align="right"> <Link to="/addemployee" align="right"><button type="button" className="btn btn-success" >
            Add Employee
          </button></Link>  <Link to="/" align="right"><button type="button" className="btn btn-primary" >
           LogOut
          </button></Link></h2>
      <h2 align="center">Employee List </h2>
        <Table stickyHeader aria-label="sticky table" id='Employee'>  
          <TableHead>  
            <TableRow>  
              <TableCell>ID</TableCell>  
              <TableCell align="right" >First Name</TableCell>  
              <TableCell align="right" >Last Name</TableCell>  
              <TableCell align="right" >Gender</TableCell>  
              <TableCell align="right" >Email Id</TableCell>  
              <TableCell align="right" >Phone Number</TableCell>  
              <TableCell align="right" >City</TableCell>  
              <TableCell align="right" >Get Data </TableCell>
              <TableCell align="right" >Update</TableCell> 
              <TableCell align="right" >Delete</TableCell>
            </TableRow>  
          </TableHead>  

        </Table>  
      </TableContainer>  
    );
  }
}