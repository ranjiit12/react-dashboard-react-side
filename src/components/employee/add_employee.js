import React, {Component} from "react";
import {connect} from "react-redux";
import { addEmployees} from "../../actions/index";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

export class AddEmployees extends Component  {

    
    state = {
        formdata:{
            email:'',
            password:'',
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
s
    submitForm = (e) => {
        e.preventDefault();
        this.props.addEmployees(this.state.formdata);
    }

    componentWillUnmount(){
      this.props.addEmployees(this.state.formdata);
    }

    render(){
    return (
        <form onSubmit ={this.submitForm}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1"
                 aria-describedby="emailHelp" placeholder="Enter email"
                 value={this.state.formdata.email}
                 onChange={(event)=>this.handleInput(event,'email')}
                 />
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control"
                 id="exampleInputPassword1" placeholder="Password"
                 value={this.state.formdata.password}
                 onChange={(event)=>this.handleInput(event,'password')}
                 
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
        employess:state.employess
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addEmployees}, dispatch)
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEmployees))