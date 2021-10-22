import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useHistory } from "react-router-dom";
import styled from "styled-components";
import { setUserData } from "../../actions/auth";
import { callSignup } from "../../Graphs/Auth/SignUp";
import { validateEmail, validateInputs } from "../../utils/authHelper";
import { Head , Card  , Input} from "./LoginForm";
import { toast } from 'react-toastify';


const SignUpButton = styled.input.attrs(props => ({
  type : 'submit',
  value : props.text
}))`
    background: #238636;
    color: #fff;
    cursor: pointer;
    margin: 0.5rem 0;
    width: 90%;
    border-radius: 5px;
    height: 30px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
    :disabled {
      opacity: 0.5;
    }
    &:active {
      background-color: #238200;
    }
  `
const ErrorMessage = styled.p`
    color : red;
    font-size : 12px;
    font-weight : bold;
`;


export default function RegisterForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttontext , setButtonText] = useState('Sign Up');
    const [buttonStatus , setButtonStatus] = useState(true);
    const isAuthenticated = useSelector((state) => state.loginReducer.token);
    const [errors, setError] = useState({
      email : {
        show : false,
        message : ""
      }
    })

    useEffect(() => {
      if(isAuthenticated){
        history.push(`${process.env.PUBLIC_URL}/Feed`);
      }
    },[isAuthenticated,history]);

    function validateEmails(){
      let isValid = validateEmail(email);
      if(!isValid){
        validate(false);
        setError({
          email : {
            show : true,
            message : "Please enter a valid email!"
          }
        })
      }
      else{
        validate(true);
        setError({
          email : {
            show : false,
            message : ""
          }
        })
      }
    }

    function validate(status){
      let validate = validateInputs(firstName,lastName,email,status);
      if(validate){
        setButtonStatus(false);
      }
      else{
        setButtonStatus(true);
      }
    }

    async function handleRegister(){
      try{
        setButtonText('Signing up...');
        const signUpData = await callSignup(email,password,firstName,lastName);
        if(signUpData.status === 200){
          dispatch(setUserData(signUpData.user));
          toast.success(signUpData.message);
          history.push(`${process.env.PUBLIC_URL}/Login`);
          toast.success('You can log in to your account now.');
        }
        else if(signUpData.status === 500){
          toast.error(signUpData.message);
        }
      }
      catch(e){
        throw e;
      }
    }

    return (
     <>
     <Head>Sign up for TeenagersForum</Head>
     <Card>
         <h3>Register</h3>
         <Input 
            type="text" 
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)} 
            autoFocus/>
         <Input 
            type="text" 
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)} 
            />
         <Input 
            type="email" 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)}
            onBlur = {validateEmails}
            />
         <Input 
            type="password" 
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)}
            />
            
          {
            errors && errors.email && errors.email.show && <ErrorMessage>{errors.email.message}</ErrorMessage>
          }
          
         <SignUpButton onClick={() => handleRegister()} text={buttontext} disabled = {buttonStatus}/>
     </Card>
     <Head>Already have an account ? <Link to ='/Login' style={{color : 'black' , fontWeight: 'bold'}}>Login here</Link></Head>
     </>
    )
}