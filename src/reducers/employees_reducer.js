
import {ADD_EMPLOYEES, GET_EMPLOYEES, GET_EMPLOYEE, UPDATE_EMPLOYEE, GET_LEAVES} from "../actions/index";

export default function(state={},action){
    switch(action.type){
      case GET_EMPLOYEES:
           return {...state, employees:action.payload.employees}
           break;     
  
      case GET_EMPLOYEE:
           return {...state, employee:action.payload}   
           break;
      case UPDATE_EMPLOYEE :
           return {...state, newEmployees:action.payload}     

      
      default:
         return state;     
     
    }
}    