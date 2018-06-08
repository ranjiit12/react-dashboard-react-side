import React,{ Component } from 'react';
import { auth } from '../actions'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

export default function(ComposedClass,reload){
    class AuthenticationCheck extends Component {

        state = {
            loading:true
        }

        componentWillMount(){
            this.props.auth();
         }

        componentWillReceiveProps(nextProps){
            this.setState({loading:false})

            if(!nextProps.admin.login.isAuth){
                if(reload){
                    this.props.history.push('/login');
                }
            } else {
                if(reload === false) {
                    this.props.history.push('/dashboard')
                }
            }
        }

        render(){
            if(this.state.loading){
                return <div className="loader">Loading...</div>
            }
            return(
                <ComposedClass {...this.props} admin={this.props.admin}/>
            )
        }
    }

    function mapStateToProps(state){
        return{
            admin:state.admin
        }
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({auth}, dispatch)
      }
    

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck)

}