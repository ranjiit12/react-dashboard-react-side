import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getLeaves} from "../../actions/index";
import {bindActionCreators} from "redux";


export class EmployeesLeaves extends Component {

    renderLeaves(){
        const listOfLeaves = this.props.leaves.list;
       
        if(listOfLeaves) {
            let {leaves}  = listOfLeaves;
            console.log("our leaves", leaves);
            return leaves.map(leave =>{
                  return <Link to = "/" className="list-group-item list-group-item-action">{leave.email}</Link>
            })
            
           
        }  else {
            return <div>Loading...</div>
        }
  
    }  

    componentWillMount(){
        this.props.getLeaves();
      }
    componentDidUpdate(nextProps){
        console.log("next props",nextProps);
    }  

     render(){ return (
          <div class="list-group">
            {this.renderLeaves()}
          </div>   
      )
  }
}

function mapStateToProps(state){
    return {
        leaves:state.leaves
    }
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({getLeaves}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps) (EmployeesLeaves)