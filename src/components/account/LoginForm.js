import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link , useHistory} from 'react-router-dom';
import styled from 'styled-components'
import { clearAuth, setLoginFlag, setUserAuthtoken, setUserData } from '../../actions/auth';
import { callLogin } from '../../Graphs/Auth/Login';

export const Head = styled.div`
    background-color : #161B22;
    width : 320px;
    height : auto;
    border-radius : 8px;
    color : white;
    align-items : center;
    padding : 8px;
    justify-content : center;
    text-align : center;
    margin: 0.7rem;
    font-size: 12px;
`;

export const Card = styled.div`
    background-color : #161B22;
    display : flex;
    width : 320px;
    height : auto;
    border-radius : 8px;
    color : white;
    flex-direction : column;
    align-items : center;
    padding : 8px;
`;

const SignInButton = styled.input.attrs(props => ({
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
    &:active {
      background-color: #238200;
    }
`;

export const Input = styled.input`
    width : 80%;
    padding : 8px 14px;
    margin : 0.5rem 0;
    font-weight : 400;
    border: none;
    outline: 0;
    border-radius: 4px;
    text-align: left;
    background-color: #0D1117;
    color : white
`;

export default function LoginForm() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttontext , setButtonText] = useState('Sign in');

    async function handleLogin(){
      try{
        setButtonText('Signing in..');
        const loginData = await callLogin(email,password,history);
        if(loginData.status === 200){
          dispatch(setUserData(loginData.user));
          dispatch(setLoginFlag(true));
          dispatch(setUserAuthtoken(loginData.authToken));

          history.push(`${process.env.PUBLIC_URL}/dashboard`);
        }
        else if(loginData.status === 500){
          dispatch(clearAuth());
          setButtonText('Sign in');
          alert(loginData.message);
        }
      }
      catch(e){
        throw e;
      }
    }

    return (
     <>
     <Head>Sign in to TeenagersForum</Head>
     <Card>
         <h3>Login</h3>
         <Input type="email" placeholder="email" autoFocus onChange = {(e) => setEmail(e.target.value)}/>
         <Input type="password" placeholder="password" onChange = {(e) => setPassword(e.target.value)}/>
         <SignInButton onClick= {() => handleLogin()} text = {buttontext}/>
     </Card>
     <Head>Dont have an account ? <Link to ='/Register' style={{color : 'white' , fontWeight: 'bold'}}>Sign up here</Link></Head>
     </>
    )
}
