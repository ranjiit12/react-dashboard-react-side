import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Link} from "react-router-dom";
 
class TimeTable extends Component {
  state = {
    date: new Date(),
    dateClicked: false
  }

  onChange = date => 
  this.setState({ date:date, dateClicked: ! this.state.dateClicked }, 
  console.log(this.state));
 
  render() {
    if(this.state.dateClicked){

    }
    return (
        <div class="panel panel-default">
        <div class="panel-heading main-color-bg">
          <h3 class="panel-title">Users</h3>
        </div>
        <div class="panel-body" id  = "calender_panel_body">
        <Link to = {{pathname: "/add_holiday/"+this.state.date}}>
          <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        </Link>
        </div>
  </div>   
    );
  }
}

export default TimeTable;