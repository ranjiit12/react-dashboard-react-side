
import {LOGIN, AUTH} from "../actions/index";

export default function(state={},action){
    switch(action.type){
      case LOGIN:
      return {...state,login:action.payload}
      case AUTH:
      return {...state,login:action.payload}
      default:
         return state;     
     
    }
}    