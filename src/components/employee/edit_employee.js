import React, {Component} from "react";
import {connect} from "react-redux";
import {getEmployee, updateEmployee} from "../../actions/index";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

export class UPdateEmployees extends Component  {

    
    state = {
        formdata:{
            email:'',
            department:'',
            name:''
        }
    }


    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("state inn submit",this.state.formdata);
        this.props.updateEmployee(this.state.formdata);
    }

    componentWillMount(){

      this.props.getEmployee(this.props.match.params.id);
    }
    componentWillReceiveProps(nextProps) {
       let {employee} =nextProps.employees.employee;
    
       this.setState({
           formdata: {
               name:employee.name,
               email:employee.email,
               department:employee.deparmtent
           }
       }, () =>{
           console.log(this.state);
       })
    }

    render(){
    return (
        <form onSubmit ={this.submitForm}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1"
                 aria-describedby="emailHelp" placeholder="Enter email"
                 value={this.state.formdata.email}
                 onChange={(event)=> this.handleInput(event,'email')}
                 />
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="text" class="form-control"
                 id="exampleInputPassword1" placeholder="nmae"
                 value={this.state.formdata.name}
                 onChange={(event)=>this.handleInput(event,'name')}
                 />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Department</label>
                <input type="text" class="form-control"
                 id="exampleInputPassword1" placeholder="deparmtent"
                 value={this.state.formdata.department}
                 onChange={(event)=>this.handleInput(event,'department')}
                 />
            </div>
            <button type="submit" class="btn btn-primary" onClick = {this.submitForm}>Submit</button>
      </form>
    )
}
}

function mapStateToProps(state){
    return {
        employees:state.employees
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getEmployee:getEmployee, updateEmployee:updateEmployee}, dispatch)
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UPdateEmployees))