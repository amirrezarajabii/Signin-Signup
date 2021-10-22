import {
    StyledTextInput, 
    StyledLablel, 
    StyledFormArea, 
    StyledFormButton, 
    Avatar, 
    StyledTitle, 
    colors, 
    ButtonGroup, 
} from './../components/Styles';

import Logo from './../assets/logo.png';

import axios from "axios";


//formik
import { Formik, Form } from 'formik';
import {TextInput} from "./../components/FormLib";
import * as Yup from 'yup';

//icons
import {FiMail, FiLock} from 'react-icons/fi';

//Loader
import Loader from 'react-loader-spinner';

//auth & redux


const Login = ({loginUser}) => {
    return(
       <div>
           <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle size={30} color={colors.theme}>Member Login</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email address").required("Required"),
                            password:Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                        })
                    }
                    >
                    {({isSubmitting})=>(
                        <Form onSubmit={(e) => login(e)}>
                            <TextInput
                            id="exampleInputEmail1"
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="example@example.com"
                                icon={<FiMail/>}
                            />
                            <TextInput
                            id="exampleInputPassword1"
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock/>}
                            />

                            <ButtonGroup>
                                {!isSubmitting && (
                                    <StyledFormButton type="submit">Login
                                    </StyledFormButton>
                                    )}

                                {isSubmitting && (
                                    <Loader
                                        type="Puff"
                                        color={colors.theme}
                                        height={49}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
           </StyledFormArea>
       </div>
    )
}

function login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById('exampleInputEmail1').value,
    password:document.getElementById('exampleInputPassword1').value
  }
  axios.post('http://localhost:3000/login',request)
  .then(resp => {
    alert(resp.data.message);
  }).catch(err => {
    console.log(err);
  })
}

export default Login;