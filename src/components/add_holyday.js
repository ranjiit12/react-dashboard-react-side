import React, {Component} from "react";
import {connect} from "react-redux";
import { addHolyDay} from "../actions/index";
import {bindActionCreators} from "redux";


 class AddHolyDay extends Component  {
  constructor(props){
      super(); 
      this.state = {
          formdata :{
              event:"",
              date:""
          }
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
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata["date"] = this.props.match.params.date;
        this.setState({formdata:newFormdata}, () => {
            addHolyDay(this.state.formdata);
        })
     
       
    }

    componentWillUnmount(){
      addHolyDay(this.state.formdata);
    }

    render(){
        console.log(this.props);
    return (
        <form onSubmit ={this.submitForm}>
            <div class="form-group">
                <label for="exampleInputEmail1">Event</label>
                <input type="email" class="form-control" id="exampleInputEmail1"
                 aria-describedby="emailHelp" placeholder="Event"
                 value={this.state.formdata.email}
                 onChange={(event)=>this.handleInput(event, "event")}
                 />
                
            </div>
            
            <button type="submit" class="btn btn-primary" onClick = {this.submitForm}>Submit</button>
      </form>
    )
}
}

// function mapStateToProps(state){
//     return {
//         books:state.books
//     }
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addHolyDay}, dispatch)
  }

export default connect(mapDispatchToProps)(AddHolyDay)