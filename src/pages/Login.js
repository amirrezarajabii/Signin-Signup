import {
    StyledTextInput, 
    StyledLablel, 
    StyledFormArea, 
    StyledFormButton, 
    Avatar, 
    StyledTitle, 
    colors, 
    ButtonGroup, 
    ExtraText, 
    TextLink
} from './../components/Styles';

import Logo from './../assets/logo.png';

//formik
import { Formik, Form } from 'formik';
import {TextInput} from "./../components/FormLib";
import * as Yup from 'yup';

//icons
import {FiMail, FiLock} from 'react-icons/fi';

//Loader
import Loader from 'react-loader-spinner';

const Login = () => {
    return(
       <div>
           <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle size={30} color={colors.theme}>Member Loging</StyledTitle>
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
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                    >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="example@example.com"
                                icon={<FiMail/>}
                            />
                            <TextInput
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
                <ExtraText>
                    New here? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>
           </StyledFormArea>
       </div>
    )
}

export default Login;