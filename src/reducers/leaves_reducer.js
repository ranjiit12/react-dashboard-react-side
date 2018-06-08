
import { GET_LEAVES} from "../actions/index";

export default function(state={},action){
    switch(action.type){
    case GET_LEAVES:
        console.log("reducer get Leaves", action.payload);
       return {...state, list:action.payload }

      default:
         return state;     
     
    }
}    