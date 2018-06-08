import { combineReducers } from 'redux';
import employeesReducer from "../reducers/employees_reducer";
import adminReducer from "./admin_reducers";
import leavesReducer from "./leaves_reducer"

const rootReducer = combineReducers({
  employees:employeesReducer,
  admin: adminReducer,
  leaves: leavesReducer
});

export default rootReducer;