import Axios from "axios";
;

export const GET_EMPLOYEES = "GET_USERS";
export const ADD_EMPLOYEES = "ADD_EMPLOYEES";
export const UPDATE_EMPLOYEE = "EDIT_EMPLOYEE";
export const GET_EMPLOYEE = "GET_EMPLOYEE";
export const ADD_HOLYDAY   = "ADD_HOLYDAY";
export const ADD_Leave   = "ADD_Leave";
export const GET_LEAVES = "GET_LEAVES";
export const DELETE_EMPLOYEE= "DELETE_EMPLOYEE";


export const LOGIN   = "LOGIN";
export const AUTH    = "AUTH";

const baseURL = "http://localhost:8000/api";

export const fetchEmployees = () => {
    
 let request = Axios.get(`${baseURL}/employees`).then( response => {
       return response.data;
 });

  return {
      type: GET_EMPLOYEES,
      payload:request
  }
}


export function getLeaves (){
    const request = Axios.get(`${baseURL}/admin/leaves`)
    .then(response => response.data);

        return {
        type: GET_LEAVES,
        payload:request
        }
}

export function getEmployee(id){
   
    const request = Axios.get(`${baseURL}/get_employee?id=${id}`)
                    .then(response => response.data);

    return {
        type: GET_EMPLOYEE,
        payload:request
    }
}



export const addEmployees = (employee) => {
    console.log("Employee", employee);
    let request = Axios.post(`${baseURL}/employees/register`, employee);
    return {
        type: GET_EMPLOYEES,
        payload:request
    }
   }


export function updateEmployee(data){
    const request = Axios.post(`${baseURL}/employees/employee_update`,data)
                .then(response => response.data);

    return {
        type:UPDATE_EMPLOYEE,
        payload:request
    }

}

export function deleteEmployee(id){
    const request = Axios.delete(`${baseURL}/admin/delete_employee?id=${id}`)
                    .then(response => response.data)

    return {
        type:DELETE_EMPLOYEE,
        payload:request
    }
}


export const addHolyDay = (holyday) => {
    console.log("holyda", holyday);
    let request = Axios.post(`${baseURL}/admin/timetable`, holyday);
    return {
        type: ADD_HOLYDAY,
        payload:request
    }
   }


export function loginUser({email,password}){
    console.log("login", email, password);
    const request = Axios.post(`${baseURL}/users/login`,{email,password})
                .then(response => response.data);

    return {
        type:LOGIN,
        payload:request
    }
}



export function auth(){
 
    const request = Axios.get(`${baseURL}/auth`)
                .then(response => response.data);

    return {
        type:AUTH,
        payload:request
    }

}

export function getUsers(){
    const request = Axios.get(`/api/users`)
                    .then(response => response.data);
        
    return {
        type:'GET_USER',
        payload:request
    }
}
