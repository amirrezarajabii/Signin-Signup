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
import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';

//Loader
import Loader from 'react-loader-spinner';

const Signup = () => {
    return(
       <div>
           <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle size={30} color={colors.theme}>Member Signing up</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateOfBirthday: "",
                        name: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string()
                            .email("Invalid email address")
                            .required("Required"),
                            password:Yup.string()
                            .min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required"),
                            name: Yup.string()
                            .required("Required"),
                            dateOfBirthday: Yup.date()
                            .required("Required"),
                            repeatPassword: Yup.string()
                            .required("Required").oneOf([Yup.ref("password")],"Password must match")
                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                    >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Asghar Farhadi"
                                icon={<FiUser/>}
                            />
                             <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="example@example.com"
                                icon={<FiMail/>}
                            />
                            <TextInput
                                name="dateOfBirth"
                                type="date"
                                label="Date of Birth"
                                icon={<FiCalendar/>}
                            />
                             <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock/>}
                            />
                             <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="********"
                                icon={<FiLock/>}
                            />

                            <ButtonGroup>
                                {!isSubmitting && (
                                    <StyledFormButton type="submit">Signup
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
                    Already have an account? <TextLink to="/login">Login</TextLink>
                </ExtraText>
           </StyledFormArea>
       </div>
    )
}

export default Signup;