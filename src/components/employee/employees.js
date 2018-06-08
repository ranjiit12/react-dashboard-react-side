import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchEmployees,deleteEmployee} from "../../actions/index";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import _ from "lodash";

export class Employees extends Component {
  
constructor(props){
   super();
   this.delteEmployees = this.delteEmployees.bind(this);
}  


componentWillMount(){
  this.props.fetchEmployees();
}


 renderUsers(){
    const employees = this.props.employees || [{name:"Ranjeet", email:"someone@something.com"}];
      
      return _.map(employees.employees, (employee =>  {
          
             return (
              <tr key  = {employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td><Link class="btn btn-default"  
              to =  {"/edit/employees/"+employee._id} >
              Edit</Link> 
               <button class="btn btn-danger" 
               id = {employee._id} onClick = {this.delteEmployees}>Delete</button></td>
            </tr>
             )
      }));
    }
  
 

  delteEmployees( e){
     e.preventDefault();
     this.props.deleteEmployee(e.target.id);
   }
   render(){
    return (
        <div>
            <div class="panel panel-default">
              <div class="panel-heading main-color-bg">
                <h3 class="panel-title">Users</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                      <div class="col-md-12">
                          <Link className="form-control" to = "/add_employees"
                           >Add Employees</Link>
                      </div>
                </div>
                <br />
                <table class="table table-striped table-hover">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th></th>
                      </tr>
                      {this.renderUsers()}
                    </table>
              </div>
              </div>
        </div>   
    )
}
}

function mapStateToProps(state){
  return {
    employees:state.employees
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchEmployees, deleteEmployee}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Employees)