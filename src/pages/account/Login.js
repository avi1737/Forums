import { useEffect } from "react";
import LoginForm from "../../components/account/LoginForm";
import PageCenter from "../../components/common/PageCenter";

const Login = () => {

    useEffect(() => {
        document.title = "Teenagerforums - Login"
    },[]);
    return(
        <PageCenter child = {LoginForm}/>
    )
}

export default Login;