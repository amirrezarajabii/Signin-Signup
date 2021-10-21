import axios from 'axios';

export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
//Make checks and get some data

// axios.post("https://arcane-savannah-50090.herokuapp.com/user/signin",
// credentials,
// {
//     headers: {
//         "Content-Type": "application/json"
//     }
// }
// ).then((response) => {

// }).catch(err => console.error(err));

const user = {
    name: "Amir",
    "email": "amir@gmail.com"
}
const status = true;

if(status === true){
    //Allow access and redirect
} else {
    // Return error to the user 
}
}

export const signupUser = (credentials, history, setFieldError, setSubmitting) => {

}

export const logoutUser = () => {

}