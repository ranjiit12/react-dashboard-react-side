import React, { Component } from 'react';
import DashBoard from "./components/dashboard/dashboard";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header";
import SideBar from "./components/side_bar/side_bar";
import TimeTable from "./components/time_table";
import Employees from "./components/employee/employees";
import AddEmployees from "./components/employee/add_employee";
import UpdateEmployees from "./components/employee/edit_employee";
import EmployeesLeaves from "./components/employee/employees_leaves";
import AddHolyDay from "./components/add_holyday";
import Login from "../src/components/admin/login";
// import Auth from  "./hoc/auth";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      <section className = "main">
      <div className = "container">
        <div className = "row">      
           <Switch>   
             {/* <Route exact path = "/"  component = {Auth(Login,null)} /> */}
             <Route exact path = "/login"  component = {Login} />
             <Route exact path = "/dashboard"  component = {DashBoard} />
             <Route exact path = "/edit/employees/:id" component = {UpdateEmployees} />
             <Route exact path = "/add_holiday/:date" component = {AddHolyDay} />
             <Route exact path = "/add_employees"  component = {AddEmployees} />
             <Route exact path = "/timetable"  component = {TimeTable} />
             <Route exact path = "/employees_leaves" component = {EmployeesLeaves} />
             <Route exact path = "/users"  component = {Employees} />
           </Switch>
         </div>
         </div> 
         </section> 
         </div>
          );

  }
}

export default App;
