import axios from "axios";

import {sessionService} from 'redux-react-session';

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  //Make checks and get some data

  axios
    .post(
      "https://arcane-savannah-50090.herokuapp.com/user/signin",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const { data } = response;

      if (data.status === "FAILED") {
        const { message } = data;

        //check for specific error
        if (message.includes("credentials")) {
          setFieldError("email", message);
          setFieldError("password", message);
        } else if (message.includes("password")) {
          setFieldError("password", message);
        }
      } else if (data.status === "SUCCESS") {
          const userDate = data.data[0];

          const token = userDate._id;

          sessionService.saveSession(token).then(() => {
              sessionService.saveUser(userDate).then(() => {
                    history.push("/dashboard");
              }).catch(err => console.error(err))
          }).catch(err => console.error(err))
      }

      //complete submission
      setSubmitting(false);
    })
    .catch((err) => console.error(err));

  const user = {
    name: "Amir",
    email: "amir@gmail.com",
  };
  const status = true;

  if (status === true) {
    //Allow access and redirect
  } else {
    // Return error to the user
  }
};

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {};

export const logoutUser = () => {};
