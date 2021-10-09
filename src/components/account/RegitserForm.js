import { Link } from "react-router-dom";
import styled from "styled-components";
import { Head , Card  , Input} from "./LoginForm";


const SignUpButton = styled.input.attrs({ 
    type: 'submit',
    value: 'Sign Up'
  })`
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
    &:active {
      background-color: #238200;
    }
  `


export default function RegisterForm() {
    return (
     <>
     <Head>Sign up for TeenagersForum</Head>
     <Card>
         <h3>Register</h3>
         <Input type="text" placeholder="First Name" autoFocus/>
         <Input type="text" placeholder="Last Name"/>
         <Input type="email" placeholder="email" />
         <Input type="password" placeholder="password" />
         <SignUpButton onClick={() => alert("677")}/>
     </Card>
     <Head>Already have an account ? <Link to ='/Login' style={{color : 'white' , fontWeight: 'bold'}}>Login here</Link></Head>
     </>
    )
}