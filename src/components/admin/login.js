import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import { loginUser } from "../../actions/index";
import {bindActionCreators} from "redux";
import cookie from 'react-cookie';
class Login extends Component {

    state = {
        email:'',
        password:'',
        error:'',
        success:false
    }

    handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleInputPassword = (event) => {
        this.setState({password:event.target.value})
    }

    componentWillReceiveProps(nextProps){
        console.log("next propss", nextProps)
        if(nextProps.admin.login.isAuth && nextProps.admin.login.isAdmin){
            this.props.history.push('/dashboard');
        }
    }


    submitForm = (e) =>{
          e.preventDefault();
         
          this.props.loginUser(this.state);
    }

   render(){
      return (
            <form onSubmit ={this.submitForm}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleInputEmail}
                    />
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control"
                    id="exampleInputPassword1" placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputPassword} />
                    
                
                </div>
                <button type="submit"
                 class="btn btn-primary" 
                 onClick = {this.submitForm}>Submit</button>
         </form>
      )
   }
}  


function mapStateToProps(state){
    return {
        admin:state.admin
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loginUser:loginUser}, dispatch)
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))